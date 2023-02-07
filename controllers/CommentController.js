import CommentModel from '../models/Comment.js';

export const getAll = async (req, res) => {
  try {
    const tasks = await CommentModel.find({ task: req.params.id })
      .populate('author task')
      .exec();

    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить ответы к этой задаче',
    });
  }
};

// export const removeAll = (req, res) => {
//   CommentModel.deleteMany({ task: req.params.id }, (err, doc) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({
//         message: 'Не удалось удалить ответы к этой задаче',
//       });
//     }

//     if (!doc) {
//       return res.status(404).json({ message: 'Данная задача не существует' });
//     }
//     res.json({ removedAll: true });
//   });
// };

export const add = async (req, res) => {
  try {
    const doc = new CommentModel({
      author: req.userId,
      task: req.params.id,
      text: req.body.text,
      attachmentUrl: req.body.attachmentUrl,
    });

    const comment = await doc.save();

    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось оставить комментарий',
    });
  }
};

export const remove = (req, res) => {
  CommentModel.findOneAndDelete(
    {
      _id: req.params.id,
    },
    (err, doc) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'Не удалось удалить ответ',
        });
      }

      if (!doc) {
        return res.status(404).json({
          message: 'Данный ответ не существует',
        });
      }
      res.json({ removed: true });
    }
  );
};

export const update = async (req, res) => {
  try {
    await CommentModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        text: req.body.text,

        attachmentUrl: req.body.attachmentUrl,
      }
    );

    res.json({ updated: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось отредактировать комментарий',
    });
  }
};
