import { Heading, Box, Image, Badge } from "@chakra-ui/react";

export const Title = ({ children }) => (
  <Box>
    <Heading display="inline-block" as="h3" fontSize={26} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} mt={4} />
);

export const Meta = ({ children }) => (
  <Badge bgColor={"transparent"} w={20} m={1} mr={3}>
    <Badge colorScheme="green" pl={1} pr={1} mb={1}>
      {children}
    </Badge>
  </Badge>
);
