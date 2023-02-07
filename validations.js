import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Некорректный формат почтового адреса').isEmail(),
  body('password', 'Длинна пароля должна быть не менее 5 символов').isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body('email', 'Некорректный формат почтового адреса').isEmail(),
  body('password', 'Длина пароля должна быть не менее 5 символов').isLength({
    min: 5,
  }),
  body('fullName', 'Укажите Ваше настоящее имя - мин. 3 символа').isLength({
    min: 3,
  }),
  // body('avatarUrl', 'Некорректная ссылка на изображение').optional().isURL(),
];

export const taskCreateValidation = [
  body('taskFor', 'Укажите сотрудника'),
  body('task', 'Введите задачу для сотрудника - мин. 3 символа')
    .isLength({ min: 1 })
    .isString(),
  body('text', 'Поясните суть задачи - мин. 5 символов')
    .isLength({ min: 1 })
    .isString(),
  body('deadline', 'Укажите дедлайн').isDate(),
  // body('attachmentUrl', 'Некорректная ссылка на файл')
  //   .optional({ checkFalsy: true })
  //   .isURL(),
];

export const addCommentValidation = [
  body('text', 'Напишите комментарий - мин. 3 символа')
    .isLength({ min: 1 })
    .isString(),
  // body('attachmentUrl', 'Некорректная ссылка на файл').optional().isURL(),
];
