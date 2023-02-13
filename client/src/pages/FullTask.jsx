import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  Button,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { AttachmentIcon, DeleteIcon, ChevronRightIcon } from '@chakra-ui/icons';
import MarkdownEditor from '@uiw/react-markdown-editor';
import axios from '../axios';

import { fetchComments } from '../redux/slices/comments';

import Card from '../components/Card';
import SkeletonCard from '../components/SkeletonCard';
import Comment from '../components/Comment';

export default function FullTask() {
  const { id } = useParams();
  const userData = useSelector((state) => state.auth.data);

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isNewComment, setNewComment] = useState(false);
  const [text, setText] = useState('');
  const [filename, setFilename] = useState('');
  const [attachmentUrl, setAttachmentUrl] = useState('');

  const inputFileRef = useRef(null);

  const onSubmit = async () => {
    try {
      const fields = {
        text,
        attachmentUrl,
      };

      const { data } = await axios.post(`/tasks/${id}/comments`, fields);

      setText('');
      setAttachmentUrl('');
      setNewComment(true);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при добавлении ответа');
    }
  };

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

  const { colorMode } = useColorMode();
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');

  useEffect(() => {
    axios
      .get(`/tasks/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при загрузке задачи');
      });
  }, []);

  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  const handleCommentDeletion = () => {
    setNewComment(!isNewComment);
  };

  const isCommentLoading = comments.status !== 'loaded'; //для реализации скелетона

  useEffect(() => {
    dispatch(fetchComments(id));
    setNewComment(false);
  }, [isNewComment]);

  if (isLoading || isCommentLoading) {
    return <SkeletonCard spacing="10" isFullTask />;
  }

  return (
    <Stack m="10" spacing="5">
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
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={`/admin/${data.taskFor._id}`}>
              {data.taskFor.fullName === userData.fullName
                ? 'Мои задачи'
                : data.taskFor.fullName}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}

      <Card
        _id={data._id}
        taskFor={data.taskFor}
        task={data.task}
        text={data.text}
        deadline={data.deadline}
        success={data.success}
        attachmentUrl={data.attachmentUrl}
        taskFrom={data.taskFrom}
        createdAt={data.createdAt}
        updatedAt={data.updatedAt}
        isFullTask
      />

      <Stack
        spacing="5"
        justify="space-between"
        p="5"
        bgColor={colorValue}
        borderRadius="xl"
        shadow="lg"
        data-color-mode={colorMode}
      >
        <HStack justify="space-between">
          <Text fontWeight={999}>Добавьте ответ</Text>
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
          </HStack>
          <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            hidden
          />
        </HStack>
        <MarkdownEditor
          minHeight="100px"
          placeholder="Для переноса строки используйте двойной [Ввод ↵]"
          value={text}
          onChange={setText}
        />
        <Button onClick={onSubmit}>Опубликовать</Button>
      </Stack>

      {comments.items
        .slice(0)
        .reverse()
        .map((obj, index) => (
          <Comment
            key={index}
            _id={obj._id}
            author={obj.author}
            task={obj.task}
            text={obj.text}
            attachmentUrl={obj.attachmentUrl}
            createdAt={obj.createdAt}
            onClick={handleCommentDeletion}
          />
        ))}
    </Stack>
  );
}
