import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { fetchAuth, selectIsAuth } from '../redux/slices/auth';

export default function Auth() {
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Неверный email или пароль');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
      window.localStorage.setItem('isAdmin', data.payload.isAdmin);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxW="lg" transform="translate(0, 25%)">
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing="3" textAlign="center">
            <Heading size="lg">Войдите в свой аккаунт</Heading>
          </Stack>
        </Stack>
        <Box
          bgColor={colorValue}
          py="8"
          px="10"
          boxShadow="lg"
          borderRadius="xl"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="10">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Input
                    isInvalid={Boolean(errors.email?.message)}
                    variant="filled"
                    id="email"
                    type="email"
                    {...register('email', { required: 'Укажите почту' })}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Пароль:</FormLabel>
                  <Input
                    isInvalid={Boolean(errors.password?.message)}
                    errors={errors.password?.message}
                    variant="filled"
                    id="password"
                    type="password"
                    {...register('password', { required: 'Введите пароль' })}
                  />
                </FormControl>
              </Stack>
              {/* <HStack justify="space-between">
                <Checkbox defaultChecked>Запомнить меня</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Забыли пароль?
                </Button>
              </HStack> */}
              <Stack spacing="6">
                <Button disabled={!isValid} type="submit" colorScheme="blue">
                  Войти
                </Button>
                <HStack>
                  <Divider />
                  <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                    или
                  </Text>
                  <Divider />
                </HStack>
                <Link to="/register">
                  <Button width="100%" colorScheme="green">
                    Зарегистрироваться
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
}
