import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (taskId) => {
    const { data } = await axios.get(`/tasks/${taskId}/comments`);
    return data;
  }
);

export const fetchRemoveComment = createAsyncThunk(
  'comments/fetchRemoveComment',
  async ([taskId, commentId]) => {
    const { data } = await axios.delete(
      `/tasks/${taskId}/comments/${commentId}`
    );
    return data;
  }
);

const initialState = {
  comments: {
    items: [],
    status: 'loading',
  },
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    // Получение комментариев
    [fetchComments.pending]: (state) => {
      state.comments.items = [];
      state.comments.status = 'loading';
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.comments.items = action.payload;
      state.comments.status = 'loaded';
    },
    [fetchComments.rejected]: (state) => {
      state.comments.items = [];
      state.comments.status = 'error';
    },
    // Удаление комментария
    [fetchRemoveComment.pending]: (state, action) => {
      state.comments.items = state.comments.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
