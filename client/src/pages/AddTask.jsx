import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import {
  Box,
  Select,
  HStack,
  Stack,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { AttachmentIcon, DeleteIcon } from '@chakra-ui/icons';

import axios from '../axios';

import MarkdownEditor from '@uiw/react-markdown-editor';

import { fetchUsers } from '../redux/slices/users';
import { selectIsAuth } from '../redux/slices/auth';

export default function AddTask() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const isEditing = Boolean(id);

  const { colorMode } = useColorMode();
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');

  const today = new Date(Date.now()); // подогнать под мск

  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [task, setTask] = useState('');
  const [taskFor, setTaskFor] = useState('');
  const [deadline, setDeadline] = useState(
    isEditing ? '' : today.toISOString().split('T')[0]
  );
  const [filename, setFilename] = useState('');
  const [attachmentUrl, setAttachmentUrl] = useState('');
  const inputFileRef = useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('file', file);
      const { data } = await axios.post('/upload', formData);
      setAttachmentUrl(data.url);
      setFilename(data.filename);
    } catch (err) {
      console.warn(err);
      alert('Не удалось загрузить файл');
    }
  };

  const onClickRemoveFile = () => {
    setAttachmentUrl('');
  };

  const onSubmit = async () => {
    try {
      setLoading(true);

      const fields = {
        taskFor,
        task,
        text,
        deadline,
        attachmentUrl,
      };

      const { data } = isEditing
        ? await axios.patch(`/tasks/${id}`, fields)
        : await axios.post('/tasks', fields);

      const _id = isEditing ? id : data._id;

      navigate(`/tasks/${_id}`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании задачи');
    }
  };

  useEffect(() => {
    if (id) {
      axios.get(`/tasks/${id}`).then(({ data }) => {
        setText(data.text);
        setTask(data.task);
        setTaskFor(data.taskFor);
        setDeadline(data.deadline.split('T')[0]);
        setAttachmentUrl(data.attachmentUrl);
        setFilename(data.attachmentUrl.split('/').pop());
      });
    }
  }, []);

  if (!window.localStorage.getItem('token') && !isAuth)
    return <Navigate to="/" />;

  return (
    <Stack
      bgColor={colorValue}
      borderRadius="xl"
      shadow="lg"
      p="5"
      m="10"
      spacing="5"
    >
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="flushed"
        size="lg"
        placeholder="Введите название задачи"
      />
      <Select
        value={taskFor}
        onChange={(e) => setTaskFor(e.target.value)}
        placeholder={taskFor ? taskFor.fullName : 'Выберите сотрудника'}
      >
        {users.items.map(
          (obj, index) =>
            obj._id !== taskFor._id && (
              <option key={index} value={obj._id}>
                {obj.fullName}
              </option>
            )
        )}
      </Select>

      <Input
        type="date"
        defaultValue={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <Box data-color-mode={colorMode}>
        <MarkdownEditor
          minHeight="150px"
          placeholder="Используйте двойной [Ввод ↵] для переноса строки"
          value={text}
          onChange={setText}
        />
      </Box>

      <HStack justify="space-between">
        <HStack>
          {attachmentUrl && (
            <Button title={filename} disabled>
              <AttachmentIcon mr="2" />
              {filename.split('.')[1] + '-файл'}
            </Button>
          )}
          <Button
            onClick={
              attachmentUrl
                ? onClickRemoveFile
                : () => inputFileRef.current.click()
            }
          >
            {attachmentUrl ? <DeleteIcon /> : <AttachmentIcon />}
          </Button>
          <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            hidden
          />
        </HStack>
        <Button onClick={onSubmit} colorScheme={isEditing ? 'blue' : 'green'}>
          {isEditing ? 'Сохранить изменения' : 'Создать задачу'}
        </Button>
      </HStack>
    </Stack>
  );
}
