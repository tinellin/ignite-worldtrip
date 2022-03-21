import { Flex, Image, Link } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      align="center"
      w="100%"
      maxWidth="1440px"
      h={['55px', '75px']}
      mx="auto"
      px={['1.5rem', '8rem']}
    >
      {asPath !== '/' && (
        <Link href="/">
          <ChevronLeftIcon
            w={[6, 8]}
            h={[6, 8]}
            _hover={{ color: 'yellow.900', transition: 'color 0.3s' }}
          />
        </Link>
      )}
      <Image
        src=".././logo.svg"
        alt="world trip"
        w={['120px', '140px', '200px']}
        mx="auto"
        _hover={{ filter: 'opacity(65%)', transition: 'filter 0.3s' }}
      />
    </Flex>
  );
}
