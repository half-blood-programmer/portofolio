import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import theme from "../lib/theme";
import ThemeToggleButton from "./theme-toggle-button";
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";

const Navbar = (props) => {
  const { path } = props;
  const { setAnimate } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "20202389")}
      style={{ backdropFilter: "blur(10px)" }}
      borderColor={useColorModeValue("transparent", "#ffffff40")}
      boxShadow="sm"
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo path={path} />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        ></Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    onClick={() => setAnimate("Home")}
                  >
                    Home
                  </MenuItem>
                </NextLink>
                <NextLink href="/bio" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    onClick={() => setAnimate("Bio")}
                  >
                    Bio
                  </MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    onClick={() => setAnimate("Works")}
                  >
                    Works
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  animateKey: state.main,
});

const mapDispatchToProps = {
  setAnimate: setAnimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
