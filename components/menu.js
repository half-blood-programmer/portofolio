import NextLink from "next/link";
import {
  Link,
  Heading,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import { setanimate } from "../store/actions/";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiRedux, SiChakraui } from "react-icons/si";
import { MdOutlineBarChart } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import { Icon } from "@chakra-ui/react";
import Footer from "./footer";

const MenuSet = (props) => {
  const { setanimate } = props;
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon color={useColorModeValue("red", "gray")} />}
        variant="outline"
        aria-label="Options"
        borderColor={useColorModeValue("red", "gray")}
      ></MenuButton>

      <MenuList sx={{ textAlign: "center" }} p={2}>
        <NextLink href="/" passHref>
          <MenuItem
            as={Link}
            align="right"
            mt={1}
            justifyContent="start"
            fontSize={18}
            onClick={() => setanimate("Home")}
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
            onClick={() => setanimate("Bio")}
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
            onClick={() => setanimate("Works")}
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
  );
};

const mapStateToProps = (state) => ({
  animatekey: state.main,
});

const mapDispatchToProps = {
  setanimate: setanimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSet);
