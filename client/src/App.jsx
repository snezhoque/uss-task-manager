import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

import Header from './components/Header';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Home from './pages/Home';
import FullTask from './pages/FullTask';
import AddTask from './pages/AddTask';
import Admin from './pages/Admin';
import User from './pages/User';
import TasksFromMe from './pages/TasksFromMe';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:id" element={<User />} />
        <Route path="/tasks/:id" element={<FullTask />} />
        <Route path="/tasks/:id/edit" element={<AddTask />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/tasks/from-me" element={<TasksFromMe />} />
      </Routes>
    </>
  );
}

export default App;
