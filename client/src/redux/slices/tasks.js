import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const { data } = await axios.get('/tasks');
  return data;
});

export const fetchOthersTasks = createAsyncThunk(
  'tasks/fetchOthersTasks',
  async (id) => {
    const { data } = await axios.get(`/admin/${id}`);
    return data;
  }
);

export const fetchTasksFromMe = createAsyncThunk(
  'tasks/fetchTasksFromMe',
  async () => {
    const { data } = await axios.get(`/tasks/from-me`);
    return data;
  }
);

export const fetchRemoveTask = createAsyncThunk(
  'tasks/fetchRemoveTask',
  async (id) => {
    const { data } = await axios.delete(`/tasks/${id}`);
    return data;
  }
);

const initialState = {
  tasks: {
    items: [],
    status: 'loading',
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: {
    // Получение задач
    [fetchTasks.pending]: (state) => {
      state.tasks.items = [];
      state.tasks.status = 'loading';
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks.items = action.payload;
      state.tasks.status = 'loaded';
    },
    [fetchTasks.rejected]: (state) => {
      state.tasks.items = [];
      state.tasks.status = 'error';
    },
    // Получение задач от пользователя
    [fetchTasksFromMe.pending]: (state) => {
      state.tasks.items = [];
      state.tasks.status = 'loading';
    },
    [fetchTasksFromMe.fulfilled]: (state, action) => {
      state.tasks.items = action.payload;
      state.tasks.status = 'loaded';
    },
    [fetchTasksFromMe.rejected]: (state) => {
      state.tasks.items = [];
      state.tasks.status = 'error';
    },
    //Получение чужих задач
    [fetchOthersTasks.pending]: (state) => {
      state.tasks.items = [];
      state.tasks.status = 'loading';
    },
    [fetchOthersTasks.fulfilled]: (state, action) => {
      state.tasks.items = action.payload;
      state.tasks.status = 'loaded';
    },
    [fetchOthersTasks.rejected]: (state) => {
      state.tasks.items = [];
      state.tasks.status = 'error';
    },
    // Удаление задачи
    [fetchRemoveTask.pending]: (state, action) => {
      state.tasks.items = state.tasks.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
