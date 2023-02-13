import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navigate, Link } from 'react-router-dom';
import {
  Stack,
  SimpleGrid,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { fetchOthersTasks } from '../redux/slices/tasks';
import { selectIsAuth } from '../redux/slices/auth';

import Card from '../components/Card';
import SkeletonCard from '../components/SkeletonCard';

export default function User() {
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  const isTaskLoading = tasks.status !== 'loaded'; //для реализации скелетона
  const { id } = useParams();
  const userData = useSelector((state) => state.auth.data);

  useEffect(() => {
    dispatch(fetchOthersTasks(id));
  }, []);

  const isAuth = useSelector(selectIsAuth);

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/login" />;
  }

  if (userData._id === id) {
    return <Navigate to="/" />;
  }

  return (
    <Stack p="10" spacing="10">
      {userData.isAdmin && (
        <Breadcrumb
          p="5"
          bgColor={colorValue}
          borderRadius="xl"
          shadow="lg"
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Главная
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={'/admin'}>
              Сотрудники
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}

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
