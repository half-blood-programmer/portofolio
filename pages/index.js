import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
        Hello I&apos;m
      </Box>

      <Box display={{ md: "flex" }} textColor="black">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Adam Junio Selva
          </Heading>
          <p>Digital Craftzman (Artist/blah/blah)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
