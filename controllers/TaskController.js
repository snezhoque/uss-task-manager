import TaskModel from '../models/Task.js';
import CommentModel from '../models/Comment.js';

export const getAllMine = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ taskFor: req.userId })
      .populate('taskFrom taskFor') // получаем данные из User о пользователе, кому дали задачу
      .exec(); // ^ нужно из этих данных исключить данные о пароле пользователя

    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить задачи',
    });
  }
};

export const getAllFromMe = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ taskFrom: req.userId })
      .populate('taskFrom taskFor') // получаем данные из User о пользователе, кому дали задачу
      .exec(); // ^ нужно из этих данных исключить данные о пароле пользователя

    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить задачи',
    });
  }
};

export const getAnothers = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ taskFor: req.params.id })
      .populate('taskFrom taskFor') // получаем данные из User о пользователе, кому дали задачу
      .exec(); // ^ нужно из этих данных исключить данные о пароле пользователя

    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить задачи',
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id).populate(
      'taskFrom taskFor'
    );

    if (!task) {
      return res.status(404).json({
        message: 'Данная задача не существует',
      });
    }

    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить задачу',
    });
  }
};

export const remove = (req, res) => {
  TaskModel.findOneAndDelete(
    {
      _id: req.params.id,
    },
    (err, doc) => {
      CommentModel.deleteMany({ task: req.params.id }, () => {});

      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'Не удалось удалить задачу',
        });
      }

      if (!doc) {
        return res.status(404).json({
          message: 'Данная задача не существует',
        });
      }
      res.json({ removed: true });
    }
  );
};

export const create = async (req, res) => {
  try {
    const doc = new TaskModel({
      taskFor: req.body.taskFor,
      task: req.body.task,
      text: req.body.text,
      deadline: req.body.deadline,
      taskFrom: req.userId,
      attachmentUrl: req.body.attachmentUrl,
    });

    const task = await doc.save();

    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать задачу',
    });
  }
};

export const update = async (req, res) => {
  try {
    await TaskModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        taskFor: req.body.taskFor,
        task: req.body.task,
        text: req.body.text,
        deadline: req.body.deadline,
        success: req.body.success,
        taskFrom: req.userId,
        attachmentUrl: req.body.attachmentUrl,
      }
    );

    res.json({ updated: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось обновить задачу',
    });
  }
};
