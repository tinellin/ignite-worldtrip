import { Box, Flex, Image, Text } from '@chakra-ui/react';

type ItemsProps = {
  text: string;
  icon: string;
};

export function Item({ text, icon }: ItemsProps) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Image src={`./home/icons/${icon}.svg`} alt={text} w="85px" h="85px" />
      <Text color="gray.700" fontSize="lg" fontWeight="semibold" mt="4" mb="4">
        {text}
      </Text>
    </Flex>
  );
}
