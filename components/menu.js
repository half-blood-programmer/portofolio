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
  Spinner,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import { setanimate, setloadanimate } from "../store/actions/";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiRedux, SiChakraui, SiVercel } from "react-icons/si";
import { MdOutlineBarChart } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import { Icon } from "@chakra-ui/react";
import Footer from "./footer";
import { useEffect, useState } from "react";

const MenuSet = (props) => {
  const { setanimate, loadanima } = props;
  const [isLoading, setIsLoading] = useState("loading");

  useEffect(() => {
    setIsLoading(loadanima.loadanima);
  }, [loadanima.loadanima]);

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
        {isLoading === "complete" ? (
          <>
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
              </Link>{" "}
              |{" "}
              <Link href="https://vercel.com/" target={"_blank"}>
                <Icon as={SiVercel} /> Vercel
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
          </>
        ) : (
          <Spinner size="md" position="relative" marginRight="50%"></Spinner>
        )}
      </MenuList>
    </Menu>
  );
};

const mapStateToProps = (state) => ({
  animatekey: state.main,
  loadanima: state.load,
});

const mapDispatchToProps = {
  setanimate: setanimate,
  setloadanimate: setloadanimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSet);
