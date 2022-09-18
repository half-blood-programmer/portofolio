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
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import theme from "../lib/theme";
import ThemeToggleButton from "./theme-toggle-button";
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiRedux, SiChakraui } from "react-icons/si";
import { MdOutlineBarChart } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import { Icon } from "@chakra-ui/react";
const Navbar = (props) => {
  const { path } = props;
  const { setAnimate } = props;
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "20202389")}
      // style={{ backdropFilter: "blur(10px)" }}
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
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        ></Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton onClick={toggleColorMode} />
          <Box
            ml={2}
            display={{ base: "inline-block" }}
            style={{ backdropFilter: "blur(10px)" }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              ></MenuButton>

              <MenuList sx={{ textAlign: "right" }} p={2}>
                <NextLink href="/" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    mt={1}
                    justifyContent="end"
                    onClick={() => setAnimate("Home")}
                  >
                    Home
                  </MenuItem>
                </NextLink>
                <NextLink href="/bio" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    justifyContent="end"
                    onClick={() => setAnimate("Bio")}
                  >
                    About Me
                  </MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem
                    as={Link}
                    align="right"
                    mb={8}
                    justifyContent="end"
                    onClick={() => setAnimate("Works")}
                  >
                    My Works
                  </MenuItem>
                </NextLink>
                <hr></hr>
                <Heading
                  as="h6"
                  size="md"
                  p={2}
                  fontSize={18}
                  letterSpacing={"tighter"}
                >
                  This web is using
                </Heading>
                <Text px={2} fontSize={14}>
                  <Link href="https://nextjs.org/" target={"_blank"}>
                    {" "}
                    <Icon as={TbBrandNextjs} pt={1} />
                    Nextjs
                  </Link>{" "}
                  |{" "}
                  <Link href="https://reactjs.org/" target={"_blank"}>
                    <Icon as={GrReactjs} pt={1} />
                    Reactjs
                  </Link>{" "}
                  |{" "}
                  <Link href="https://redux.js.org/" target={"_blank"}>
                    <Icon as={SiRedux} pt={1} /> Redux
                  </Link>
                </Text>
                <Text px={2} fontSize={14}>
                  <Link href="https://chakra-ui.com/" target={"_blank"}>
                    <Icon as={SiChakraui} pt={1} /> ChakraUI
                  </Link>{" "}
                  |{" "}
                  <Link href="https://nivo.rocks/" target={"_blank"}>
                    <Icon as={MdOutlineBarChart} pt={1} /> Nivo
                  </Link>{" "}
                  |{" "}
                  <Link href="https://spline.design/" target={"_blank"}>
                    <Icon as={HiOutlineGlobe} pt={1} /> Spline{" "}
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
