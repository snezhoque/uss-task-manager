import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import {
  Image,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  Button,
} from '@chakra-ui/react';

import { fetchUsers } from '../redux/slices/users';
import { selectIsAuth } from '../redux/slices/auth';
import SkeletonCard from '../components/SkeletonCard';

export default function Admin() {
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.data);
  const { users } = useSelector((state) => state.users);

  const isUserLoading = users.status !== 'loaded'; //для реализации скелетона

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const isAuth = useSelector(selectIsAuth);
  const isAdmin = window.localStorage.getItem('isAdmin') === 'true';

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <Stack p="10" spacing="10">
      <Link to="/add-task">
        <Button width="100%" borderRadius="xl" shadow="lg">
          Создать задачу
        </Button>
      </Link>
      {(isUserLoading ? [...Array(5)] : users.items)
        .slice(0)
        .reverse()
        .map((obj, index) =>
          isUserLoading ? (
            <SkeletonCard key={index} />
          ) : (
            obj._id !== userData._id && (
              <Link key={index} to={`/admin/${obj._id}`}>
                <HStack
                  justify="space-between"
                  spacing="5"
                  p="5"
                  bgColor={colorValue}
                  borderRadius="xl"
                  shadow="lg"
                >
                  <Stack>
                    <Text fontSize="xl" fontWeight={999}>
                      {obj.fullName}
                    </Text>
                    <Text fontSize="xs" as="samp">
                      {'Почта: ' + obj.email}
                    </Text>
                    <Text fontSize="xs" as="samp">
                      {'Дата регистрации: ' +
                        obj.createdAt.split('T')[0].split('-')[2] +
                        '.' +
                        obj.createdAt.split('T')[0].split('-')[1] +
                        '.' +
                        obj.createdAt.split('T')[0].split('-')[0]}
                    </Text>
                  </Stack>
                  <Image
                    boxSize="100"
                    borderRadius="xl"
                    src={`http://localhost:4444${obj.avatarUrl}`}
                  />
                </HStack>
              </Link>
            )
          )
        )}
    </Stack>
  );
}
