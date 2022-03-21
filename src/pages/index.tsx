import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MySwiper } from '../components/Swiper/MySwiper';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Item } from '../components/Item';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Wordtrip | Home</title>
      </Head>

      <Header />
      <Flex
        bgImage="./home/bg.svg"
        bgSize="cover"
        w="100%"
        h={['232px', '368px']}
        p={['5', '0']}
        justify="center"
        align="center"
        gap="12rem"
      >
        <Box>
          <Text fontSize={['2xl', '4xl']} color="gray.50" fontWeight="medium">
            5 Continentes,
            <Text>infinitas possibilidades.</Text>
          </Text>
          <Text fontSize={['md', 'lg']} color="gray.100" mt="4">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isWideVersion && (
          <Image
            mt="10rem"
            src="./home/airplane.svg"
            alt="Imagem que representa um avião"
          />
        )}
      </Flex>

      <Flex align="center" justify="center">
        <SimpleGrid columns={[2, 5]} my={[8, 20]} gap={['2rem', '12rem']}>
          <Item text="vida noturna" icon="cocktail" />
          <Item text="praia" icon="surf" />
          <Item text="moderno" icon="building" />
          <Item text="clássico" icon="museum" />
          <Item text="e mais..." icon="earth" />
        </SimpleGrid>
      </Flex>

      <Box bg="gray.700" w={['80px', '90px']} h="3px" margin="auto" />

      <Text
        fontSize={['2xl', '4xl']}
        align="center"
        color="gray.700"
        fontWeight="semibold"
        lineHeight="1.4"
        mt={[6, 8]}
      >
        Vamos nessa?
        <Text>Então escolha seu continente</Text>
      </Text>

      <MySwiper />
    </>
  );
}
