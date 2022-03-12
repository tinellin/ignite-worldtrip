import { Box, Flex, Text } from '@chakra-ui/react';

type SwiperItemProps = {
  continent: string;
  description: string;
  bgImage: string;
};

export function SwiperItem({
  continent,
  description,
  bgImage,
}: SwiperItemProps) {
  return (
    <Flex
      bgImage={`./home/continents/${bgImage}.png`}
      bgSize="cover"
      bgRepeat="no-repeat"
      h="450px"
      w="1240px"
      justify="center"
      align="center"
    >
      <Box>
        <Text
          color="white"
          fontWeight="bold"
          fontSize="5xl"
          display="block"
          align="center"
        >
          {continent}
        </Text>
        <Text color="white" fontWeight="bold" fontSize="xl" mt="2">
          {description}
        </Text>
      </Box>
    </Flex>
  );
}
