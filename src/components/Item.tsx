import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

type ItemsProps = {
  text: string;
  icon: string;
};

export function Item({ text, icon }: ItemsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column" justify="center" align="center">
      {isWideVersion && (
        <Image src={`./home/icons/${icon}.svg`} alt={text} w="85px" h="85px" />
      )}

      <Text
        color="gray.700"
        fontSize="lg"
        fontWeight="semibold"
        my={[0.5, 4]}
        mx="auto"
      >
        {!isWideVersion && (
          <Box
            display="inline-block"
            bg="yellow.900"
            w="10px"
            h="10px"
            borderRadius="50%"
            mr="2"
          />
        )}
        {text}
      </Text>
    </Flex>
  );
}
