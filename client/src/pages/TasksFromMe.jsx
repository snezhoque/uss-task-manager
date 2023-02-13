import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { Stack, SimpleGrid, Button } from '@chakra-ui/react';

import { fetchTasksFromMe } from '../redux/slices/tasks';
import { selectIsAuth } from '../redux/slices/auth';

import Card from '../components/Card';
import SkeletonCard from '../components/SkeletonCard';

export default function User() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  const isTaskLoading = tasks.status !== 'loaded'; //для реализации скелетона

  useEffect(() => {
    dispatch(fetchTasksFromMe());
  }, []);

  const isAuth = useSelector(selectIsAuth);

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <Stack p="10" spacing="10">
      <Link to="/add-task">
        <Button width="100%" borderRadius="xl" shadow="lg">
          Создать задачу
        </Button>
      </Link>
      <SimpleGrid alignContent="center" minChildWidth="300px" spacing="10">
        {(isTaskLoading ? [...Array(5)] : tasks.items)
          .slice(0)
          .reverse()
          .map((obj, index) =>
            isTaskLoading ? (
              <SkeletonCard key={index} />
            ) : (
              <Card
                key={index}
                _id={obj._id}
                taskFor={obj.taskFor}
                task={obj.task}
                text={obj.text}
                deadline={obj.deadline}
                success={obj.success}
                attachmentUrl={obj.attachmentUrl}
                taskFrom={obj.taskFrom}
                createdAt={obj.createdAt}
                updatedAt={obj.updatedAt}
              />
            )
          )}
      </SimpleGrid>
    </Stack>
  );
}
