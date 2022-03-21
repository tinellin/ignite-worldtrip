import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  useBreakpointValue,
  Tooltip,
  HStack,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { InfoOutlineIcon } from '@chakra-ui/icons';

import { api } from '../../services/api';

type ContinentProps = {
  name: string;
  excerpt: string;
  numOfCountries: number;
  numOfLanguages: number;
  numOfCities: number;
  bgImg: string;
  toolTipInfos: string;
  someCities: Array<{
    city: string;
    country: string;
    flag: string;
    img: string;
  }>;
};

export default function Continent(continent: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Wordtrip | {continent.name}</title>
      </Head>

      <Header />

      <Flex
        bgImage={`../continent/${continent.bgImg}`}
        bgSize="cover"
        margin="auto"
        w="100%"
        maxWidth="1440px"
        h={['150px', '500px']}
        justify={isWideVersion ? 'flex-start' : 'center'}
        align={isWideVersion ? 'flex-end' : 'center'}
        px={['3rem', '6rem']}
        py={['2rem', '4rem']}
      >
        <Text color="white" fontWeight="semibold" fontSize={['3xl', '4xl']}>
          {continent.name}
        </Text>
      </Flex>

      <Flex
        maxW="1240px"
        h="300px"
        margin="auto"
        align="center"
        justify="space-around"
        direction={isWideVersion ? 'row' : 'column'}
        my={['5', '0']}
      >
        <Box maxW="500px" w="100%" p={['4', '0']}>
          <Text color="gray.700" textAlign="justify" fontSize="lg">
            {continent.excerpt}
          </Text>
        </Box>

        <SimpleGrid columns={3} gap="2.5rem" mt="1">
          <Flex
            direction="column"
            justify="center"
            align="center"
            lineHeight="2.35rem"
          >
            <Text
              color="yellow.900"
              fontWeight="semibold"
              fontSize={['4xl', '5xl']}
            >
              {continent.numOfCountries}
            </Text>
            <Text
              color="gray.700"
              fontWeight="semibold"
              fontSize={['md', 'lg']}
            >
              países
            </Text>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            align="center"
            lineHeight="2.35rem"
          >
            <Text
              color="yellow.900"
              fontWeight="semibold"
              fontSize={['4xl', '5xl']}
            >
              {continent.numOfLanguages}
            </Text>
            <Text
              color="gray.700"
              fontWeight="semibold"
              fontSize={['md', 'lg']}
            >
              línguas
            </Text>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            align="center"
            lineHeight="2.35rem"
          >
            <Text
              color="yellow.900"
              fontWeight="semibold"
              fontSize={['4xl', '5xl']}
            >
              {continent.numOfCities}
            </Text>

            <HStack>
              <Text
                color="gray.700"
                fontWeight="semibold"
                fontSize={['md', 'lg']}
              >
                cidades +100
              </Text>

              {isWideVersion && (
                <Tooltip
                  hasArrow
                  label={continent.toolTipInfos}
                  aria-label={`Um tooltip informando 100 cidades da ${continent.name}`}
                  color="white"
                  fontWeight="bold"
                  bg="yellow.900"
                >
                  <InfoOutlineIcon w={3} h={3} />
                </Tooltip>
              )}
            </HStack>
          </Flex>
        </SimpleGrid>
      </Flex>

      <Flex
        maxW="1240px"
        w="100%"
        margin="auto"
        direction="column"
        px={['4', '0']}
        mt="12"
      >
        <Text
          fontSize="3xl"
          fontWeight="medium"
          color="gray.700"
          mb={['1.5rem', '0.5rem']}
        >
          Cidade +100
        </Text>
        {isWideVersion ? (
          <SimpleGrid columns={5} gap={6} my={6}>
            {continent.someCities.map((item) => (
              <Card
                key={item.country}
                country={item.country}
                city={item.city}
                cityImg={item.img}
                flag={item.flag}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Flex direction="column" justify="center" align="center" gap="1.5rem">
            {continent.someCities.map((item) => (
              <Card
                key={item.country}
                country={item.country}
                city={item.city}
                cityImg={item.img}
                flag={item.flag}
              />
            ))}
          </Flex>
        )}
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { id: 'europe' } },
      { params: { id: 'asia' } },
      { params: { id: 'north_america' } },
      { params: { id: 'south_america' } },
      { params: { id: 'africa' } },
      { params: { id: 'oceania' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  try {
    const { data } = await api.get(id);

    return {
      props: data,
      revalidate: 60 * 60 * 24 * 90, //3 months
    };
  } catch (err) {
    console.log(`Error: ${err}`);
  }

  return {
    props: {},
  };
};
