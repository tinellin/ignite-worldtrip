import { Box, Flex, Image, Text } from '@chakra-ui/react';

type CardProps = {
  city: string;
  country: string;
  cityImg: string;
  flag: string;
};

export function Card({ city, country, cityImg, flag }: CardProps) {
  return (
    <Flex direction="column">
      <Image
        src={cityImg}
        alt={`Imagem da cidade de ${city}`}
        w="256px"
        h="173px"
        borderTopLeftRadius="5"
        borderTopRightRadius="5"
      />

      <Flex
        maxW="280px"
        h="110px"
        align="center"
        justify="space-between"
        p="5"
        borderWidth="1px"
        borderColor="yellow.900"
        borderBottomLeftRadius="5"
        borderBottomRightRadius="5"
      >
        <Box>
          <Text color="gray.700" fontWeight="semibold" fontSize="xl">
            {city}
          </Text>
          <Text color="gray.300" fontSize="sm" mt="3">
            {country}
          </Text>
        </Box>

        <Image
          src={`https://hatscripts.github.io/circle-flags/flags/${flag}.svg`}
          alt={`Bandeira do ${country}`}
          w="30px"
          h="30px"
          borderRadius="50%"
        />
      </Flex>
    </Flex>
  );
}
