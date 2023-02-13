import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../axios';

import MarkdownPreview from '@uiw/react-markdown-preview';

import {
  Box,
  IconButton,
  Text,
  Checkbox,
  Stack,
  HStack,
  useColorMode,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { LinkIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

import Timer from '../widgets/Timer';
import { fetchRemoveTask } from '../redux/slices/tasks';

export default function Card({
  _id,
  taskFor,
  task,
  text,
  deadline,
  success,
  attachmentUrl,
  taskFrom,
  createdAt,
  isFullTask,
}) {
  const dispatch = useDispatch();
  const date = new Date(createdAt);
  const { colorMode } = useColorMode();
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');
  const [completion, setCompletion] = useState(success);
  const onClickCheckbox = async () => {
    try {
      setCompletion(!completion);
      await axios.patch(`/tasks/${_id}`, {
        success: !completion,
      });
    } catch (err) {
      console.warn(err);
      alert('Ошибка при попытке внести изменения в статус выполнения задачи');
    }
  };
  const userData = useSelector((state) => state.auth.data);
  const onClickRemove = async () => {
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      await dispatch(fetchRemoveTask(_id));
    }
  };

  return (
    <Stack
      justify="space-between"
      spacing="5"
      p="5"
      bgColor={colorValue}
      borderRadius="xl"
      shadow="lg"
      textAlign="center"
    >
      <Stack>
        <HStack justify="space-between">
          <Stack textAlign="left" spacing="-0">
            {userData._id === taskFrom._id && userData._id === taskFor._id ? (
              <Text fontSize="xs" as="b">
                для себя
              </Text>
            ) : taskFrom._id === taskFor._id ? (
              <>
                <Text fontSize="xs" as="b">
                  {userData._id === taskFrom._id ? 'Вас' : taskFrom.fullName}
                </Text>
                <Text fontSize="xs">самому себе</Text>
              </>
            ) : (
              <>
                <Text fontSize="xs" as="b">
                  от {userData._id === taskFrom._id ? 'Вас' : taskFrom.fullName}
                </Text>
                <Text fontSize="xs">
                  для {userData._id === taskFor._id ? 'Вас' : taskFor.fullName}
                </Text>
              </>
            )}
          </Stack>
          {userData._id === taskFrom._id && (
            <HStack>
              <Link to={`/tasks/${_id}/edit`}>
                <IconButton size="sm" variant="ghost" icon={<EditIcon />} />
              </Link>
              <IconButton
                size="sm"
                variant="ghost"
                onClick={onClickRemove}
                icon={<DeleteIcon />}
              />
            </HStack>
          )}
        </HStack>
        <Link to={!isFullTask && `/tasks/${_id}`}>
          <Text
            // onClick={navigate(-1)}
            pt="5"
            fontSize="2xl"
            fontWeight="999"
            transitionDuration="0.3s"
            _hover={{
              color: 'grey',
            }}
          >
            {task}
          </Text>
        </Link>
      </Stack>

      <Box
        h={isFullTask ? '' : '112px'}
        overflow={isFullTask ? '' : 'hidden'}
        textAlign="left"
        p="5"
        fontSize="xl"
      >
        <MarkdownPreview
          warpperElement={{
            'data-color-mode': `${colorMode}`,
          }}
          source={text}
        />
      </Box>

      {attachmentUrl && (
        <a href={`http://localhost:4444${attachmentUrl}`} target="_blank">
          <Button variant="ghost">
            <LinkIcon mr="5px" />
            <Text>
              {attachmentUrl.split('/').pop().split('.')[1] + '-файл'}
            </Text>
          </Button>
        </a>
      )}

      <Stack>
        <Stack alignSelf="center">
          <Text>
            {'до ' +
              deadline.split('T')[0].split('-')[2] +
              '.' +
              deadline.split('T')[0].split('-')[1] +
              '.' +
              deadline.split('T')[0].split('-')[0]}
          </Text>
          <Text fontSize="sm" as="samp">
            <Timer deadline={deadline} />
          </Text>
        </Stack>
        <HStack justifyContent="space-between">
          <Text as="samp">
            {date.getDate() +
              '.' +
              (date.getMonth() + 1) +
              '.' +
              date.getFullYear()}
          </Text>
          <Checkbox
            onChange={onClickCheckbox}
            isChecked={completion}
            isDisabled={userData._id !== taskFor._id}
          >
            Выполнено
          </Checkbox>
        </HStack>
      </Stack>
    </Stack>
  );
}
