import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

import {
  addCommentValidation,
  loginValidation,
  registerValidation,
  taskCreateValidation,
} from './validations.js';

import { checkAuth, handleValidationErrors } from './utils/index.js';

import {
  UserController,
  TaskController,
  CommentController,
} from './controllers/index.js';

mongoose
  .connect(
    'mongodb+srv://admin:lp1998@cluster0.r3rfyf7.mongodb.net/app?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB disconnected', err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync(`./uploads/${_.userId}`)) {
      fs.mkdirSync(`./uploads/${_.userId}`);
    }
    cb(null, `uploads/${_.userId}`);
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post(
  '/auth/login',
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  '/auth/register',
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get('/auth/me', checkAuth, UserController.getMe);
app.get('/users', checkAuth, UserController.getAll);

app.post('/upload', checkAuth, upload.single('file'), async (req, res) => {
  res.json({
    filename: req.file.originalname,
    url: `/uploads/${req.userId}/${req.file.originalname}`,
  });
});

app.get('/admin/:id', checkAuth, TaskController.getAnothers);

app.get('/tasks', checkAuth, TaskController.getAllMine);
app.get('/tasks/from-me', checkAuth, TaskController.getAllFromMe);
app.get('/tasks/:id', checkAuth, TaskController.getOne);
app.post(
  '/tasks',
  checkAuth,
  taskCreateValidation,
  handleValidationErrors,
  TaskController.create
);
app.delete('/tasks/:id', checkAuth, TaskController.remove);
app.patch(
  '/tasks/:id',
  checkAuth, // добавить валидацию
  handleValidationErrors,
  TaskController.update
);

app.get('/tasks/:id/comments', checkAuth, CommentController.getAll);
app.post(
  '/tasks/:id/comments',
  checkAuth,
  addCommentValidation,
  handleValidationErrors,
  CommentController.add
);
app.delete('/tasks/:id/comments/:id', checkAuth, CommentController.remove);
app.patch(
  '/tasks/:id/comments/:id',
  checkAuth,
  handleValidationErrors,
  CommentController.update
);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server is working on port 4444');
});
