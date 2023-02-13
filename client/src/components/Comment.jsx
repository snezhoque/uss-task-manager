import {
  Image,
  Button,
  IconButton,
  Text,
  Stack,
  HStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import MarkdownPreview from '@uiw/react-markdown-preview';

import { DeleteIcon, LinkIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { fetchRemoveComment } from '../redux/slices/comments';

export default function Comment({
  _id,
  author,
  task,
  text,
  attachmentUrl,
  createdAt,
  onClick,
}) {
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');
  const { colorMode } = useColorMode();

  const dispatch = useDispatch();
  const onClickRemove = async () => {
    if (window.confirm('Вы действительно хотите удалить ответ?')) {
      await dispatch(fetchRemoveComment([task._id, _id]));
      onClick();
    }
  };
  return (
    <HStack
      justify="space-between"
      p="5"
      bgColor={colorValue}
      borderRadius="xl"
      shadow="lg"
    >
      <HStack spacing="5">
        <Image
          borderRadius="full"
          boxSize="50px"
          src={`http://localhost:4444${author.avatarUrl}`}
        />
        <Stack spacing="3">
          <Text as="b">{author.fullName}</Text>
          <MarkdownPreview
            warpperElement={{
              'data-color-mode': `${colorMode}`,
            }}
            source={text}
          />
          {attachmentUrl && (
            <a href={`http://localhost:4444${attachmentUrl}`} target="_blank">
              <Button variant="ghost" size="sm">
                <LinkIcon mr="5px" />
                <Text>
                  {attachmentUrl.split('/').pop().split('.')[1] + '-файл'}
                </Text>
              </Button>
            </a>
          )}
          <Text fontSize="xs" as="samp">
            {createdAt.split('T')[0].split('-')[2] +
              '.' +
              createdAt.split('T')[0].split('-')[1] +
              '.' +
              createdAt.split('T')[0].split('-')[0]}
          </Text>
        </Stack>
      </HStack>

      <IconButton
        onClick={onClickRemove}
        variant="ghost"
        icon={<DeleteIcon />}
      />
    </HStack>
  );
}
