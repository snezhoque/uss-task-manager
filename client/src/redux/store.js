import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { commentsReducer } from './slices/comments';
import { tasksReducer } from './slices/tasks';
import { usersReducer } from './slices/users';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});

export default store;
