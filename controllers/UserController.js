import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/User.js';

export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'Monro785',
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = user._doc; //исключили passwordHash. Получили userData без него

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Регистрация не удалась',
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: 'Неверный логин или пароль', //пользователь не найден
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: 'Неверный логин или пароль', //пароль неверный
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'Monro785',
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = user._doc; //исключили passwordHash. Получили userData без него

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Авторизация не удалась',
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не существует',
      });
    }
    const { passwordHash, ...userData } = user._doc; //исключили passwordHash. Получили userData без него

    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Нет доступа',
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await UserModel.find(); //надо исключить хэш пароля

    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить список пользователей',
    });
  }
};
