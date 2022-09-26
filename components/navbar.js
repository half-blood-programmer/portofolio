import Logo from "./logo";
import { Container, Box, Heading, Flex } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";
import MenuSet from "./menu";

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={"transparent"}
      backdropFilter={["blur(10px)", "none", "none"]}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo path={path} />
          </Heading>
        </Flex>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box
            ml={2}
            display={{ base: "inline-block" }}
            style={{ backdropFilter: "blur(10px)" }}
          >
            <MenuSet />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
