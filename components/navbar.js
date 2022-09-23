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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiRedux, SiChakraui } from "react-icons/si";
import { MdOutlineBarChart } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import { Icon } from "@chakra-ui/react";
import Footer from "./footer";
const Navbar = (props) => {
  const { path } = props;
  const { setAnimate } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={"transparent"}
      backdropFilter={{
        base: "none",
        xl: "none",
        md: "none",
        sm: "blur(10px)",
      }}
      // style={{ md: { backdropFilter: "blur(10px)" } }}
      // borderColor={useColorModeValue("transparent", "#ffffff40")}
      // boxShadow="sm"
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
            <Menu>
              <MenuButton
                as={IconButton}
                icon={
                  <HamburgerIcon
                    colorScheme={useColorModeValue("red", "gray")}
                  />
                }
                variant="outline"
                aria-label="Options"
                colorScheme={useColorModeValue("red", "gray")}
              ></MenuButton>

              <MenuList sx={{ textAlign: "center" }} p={2}>
                <NextLink href="/" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    mt={1}
                    justifyContent="start"
                    fontSize={18}
                    onClick={() => setAnimate("Home")}
                  >
                    Home
                  </MenuItem>
                </NextLink>
                <NextLink href="/bio" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    justifyContent="start"
                    fontSize={18}
                    onClick={() => setAnimate("Bio")}
                  >
                    About Me
                  </MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    mb={4}
                    justifyContent="start"
                    fontSize={18}
                    onClick={() => setAnimate("Works")}
                  >
                    My Works
                  </MenuItem>
                </NextLink>
                <Footer />
                <hr></hr>
                <Heading
                  as="h6"
                  size="md"
                  p={2}
                  fontSize={14}
                  letterSpacing={"tighter"}
                >
                  This web is using
                </Heading>
                <Text px={2} fontSize={11} textAlign={"center"}>
                  <Link href="https://nextjs.org/" target={"_blank"}>
                    <Icon as={TbBrandNextjs} /> Nextjs
                  </Link>{" "}
                  |{" "}
                  <Link href="https://reactjs.org/" target={"_blank"}>
                    <Icon as={GrReactjs} /> Reactjs
                  </Link>{" "}
                  |{" "}
                  <Link href="https://redux.js.org/" target={"_blank"}>
                    <Icon as={SiRedux} /> Redux
                  </Link>
                </Text>
                <Text px={2} fontSize={11} textAlign={"center"}>
                  <Link href="https://chakra-ui.com/" target={"_blank"}>
                    <Icon as={SiChakraui} /> ChakraUI
                  </Link>{" "}
                  |{" "}
                  <Link href="https://nivo.rocks/" target={"_blank"}>
                    <Icon as={MdOutlineBarChart} /> Nivo
                  </Link>{" "}
                  |{" "}
                  <Link href="https://spline.design/" target={"_blank"}>
                    <Icon as={HiOutlineGlobe} /> Spline{" "}
                  </Link>
                </Text>
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
