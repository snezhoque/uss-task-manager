import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    taskFor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    success: {
      type: Boolean,
      default: false,
    },
    taskFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    attachmentUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Task', TaskSchema);
