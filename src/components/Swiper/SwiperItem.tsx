import { Box, Flex, Link, Text } from '@chakra-ui/react';

type SwiperItemProps = {
  continent: string;
  description: string;
  bgImage: string;
  href: string;
};

export function SwiperItem({
  continent,
  description,
  bgImage,
  href,
}: SwiperItemProps) {
  return (
    <Flex
      bgImage={`./home/continents/${bgImage}.png`}
      bgSize="cover"
      bgRepeat="no-repeat"
      maxW="1240px"
      h={['260px', '450px']}
      justify="center"
      align="center"
    >
      <Link href={href} color="yellow.900">
        <Box>
          <Text
            color="white"
            fontWeight="bold"
            fontSize={['xl', '5xl']}
            align="center"
          >
            {continent}
          </Text>
          <Text
            color="white"
            fontWeight="bold"
            fontSize={['md', 'xl']}
            mt="2"
            textAlign="center"
          >
            {description}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
}
