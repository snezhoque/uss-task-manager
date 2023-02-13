import {
  HStack,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

export default function SkeletonCard({ spacing, isFullTask }) {
  const colorValue = useColorModeValue('rgba(255, 255, 255)', 'rgb(13 17 22)');
  return (
    <>
      <Box
        m={spacing}
        p="5"
        bg={colorValue}
        borderRadius="xl"
        shadow="lg"
        boxShadow="lg"
      >
        <HStack justify="space-between">
          <Skeleton h="24px" w="96px" />
          <Skeleton h="24px" w="45px" />
        </HStack>
        <SkeletonText mt="10" noOfLines={1} />
        <SkeletonText mt="5" noOfLines={7} />
        <SkeletonText w="180px" mt="10" noOfLines={2} />
        <HStack justify="space-between" mt="5">
          <Skeleton h="24px" w="96px" />
          <Skeleton h="24px" w="110px" />
        </HStack>
      </Box>
      {isFullTask &&
        [...Array(3)].map((_, index) => (
          <HStack
            key={index}
            spacing="5"
            m="10"
            p="5"
            bg={colorValue}
            borderRadius="xl"
            shadow="lg"
            boxShadow="lg"
          >
            <SkeletonCircle size="12" />
            <SkeletonText noOfLines={4} w="100%" skeletonHeight="2" />
            <Skeleton h="50px" w="50px" />
          </HStack>
        ))}
    </>
  );
}
