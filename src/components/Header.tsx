import { Box, Flex, Image, Link } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" w="100%" h="75px" align="center" justify="center">
      <Box>
        <Link href="/">
          <Image src="./logo.svg" alt="world trip" />
        </Link>
      </Box>
    </Flex>
  );
}
