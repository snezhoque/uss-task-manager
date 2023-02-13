import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAdmin, selectIsAuth } from '../redux/slices/auth';
import { Link, NavLink } from 'react-router-dom';

import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Stack,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon,
  HamburgerIcon,
  AtSignIcon,
  ViewOffIcon,
  QuestionOutlineIcon,
  QuestionIcon,
} from '@chakra-ui/icons';

import LogoLight from '../logo_light.png';
import LogoDark from '../logo_dark.png';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('isAdmin');
    }
  };

  return (
    <Flex
      as="header"
      p="20px"
      alignItems="center"
      justifyContent="space-between"
      bgColor={colorValue}
      shadow="lg"
    >
      <Link to="/">
        <Flex alignItems="center">
          <Box
            h="70px"
            w="70px"
            mr="20px"
            bgImg={colorMode === 'light' ? LogoLight : LogoDark}
            bgSize="contain"
            bgRepeat="no-repeat"
          />
          <Stack spacing="-5">
            <Text
              transform="translateY(-10px)"
              fontWeight={700}
              fontSize="35px"
            >
              Югспецстрой
            </Text>
            <Text fontSize="18px" opacity="0.5">
              Менеджер задач
            </Text>
          </Stack>
        </Flex>
      </Link>

      {isAuth && (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <NavLink to="/">
              <MenuItem icon={<QuestionOutlineIcon />}>Мои задачи</MenuItem>
            </NavLink>
            <NavLink to="/tasks/from-me">
              <MenuItem icon={<QuestionIcon />}>Задачи от меня</MenuItem>
            </NavLink>
            {isAdmin && (
              <NavLink to="/admin">
                <MenuItem icon={<AtSignIcon />}>Сотрудники</MenuItem>
              </NavLink>
            )}
            <MenuItem
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            >
              {colorMode === 'light' ? 'Тёмная тема' : 'Светлая тема'}
            </MenuItem>
            <Link to="/">
              <MenuItem onClick={onClickLogout} icon={<ViewOffIcon />}>
                Выйти
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}
