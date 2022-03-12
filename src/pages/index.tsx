import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { MySwiper } from '../components/Swiper/MySwiper';

import { Header } from '../components/Header';
import { Item } from '../components/Item';

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        bgImage="./home/bg.svg"
        bgSize="cover"
        w="100%"
        h="368px"
        justify="center"
        align="center"
        gap="30rem"
      >
        <Box>
          <Text fontSize="4xl" color="gray.50" fontWeight="medium">
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize="lg" color="gray.100" mt="4">
            Chegou a hora de tirar do papel a viagem que você
            <br /> sempre sonhou.
          </Text>
        </Box>

        <Image
          mt="10rem"
          src="./home/airplane.svg"
          alt="Imagem representativa de um avião"
        />
      </Flex>

      <Flex justify="center" align="center">
        <SimpleGrid columns={5} mt="20" gap="12rem">
          <Item text="vida noturna" icon="cocktail" />
          <Item text="praia" icon="surf" />
          <Item text="moderno" icon="building" />
          <Item text="clássico" icon="museum" />
          <Item text="e mais..." icon="earth" />
        </SimpleGrid>
      </Flex>

      <Box bg="gray.700" w="90px" h="3px" margin="auto" mt="3.5rem" />

      <Text
        fontSize="4xl"
        align="center"
        color="gray.700"
        fontWeight="semibold"
        lineHeight="1.4"
        mt="8"
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Text>

      <MySwiper />
    </>
  );
}
