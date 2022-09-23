import NextLink from "next/link";
import Image from "next/image";
import { Text, useColorModeValue, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { IconButton, useColorMode, Menu, MenuButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdSettings, MdHomeFilled } from "react-icons/md";
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link p={2}>{children}</Link>
    </NextLink>
  );
};

const Logo = (props) => {
  const { path } = props;
  const { setAnimate } = props;
  const activeHome = path === "/";
  const activeWorks = path === "/bio" || path === "/" || path === "/works";

  // alert(path);
  return (
    <>
      <LinkItem href="/">
        <IconButton
          icon={
            <Icon
              as={MdHomeFilled}
              colorScheme={useColorModeValue("red", "gray")}
              marginTop={1}
            />
          }
          variant="outline"
          display={activeHome ? "none" : "inline-block"}
          aria-label="Options"
          onClick={() => setAnimate("Home")}
          style={{ backdropFilter: "blur(10px)" }}
          colorScheme={useColorModeValue("red", "gray")}
        ></IconButton>
      </LinkItem>
      <LinkItem href="/works">
        <IconButton
          display={activeWorks ? "none" : "inline-block"}
          icon={
            <Icon
              as={MdSettings}
              colorScheme={useColorModeValue("red", "gray")}
              marginTop={1}
            />
          }
          variant="outline"
          aria-label="Options"
          onClick={() => setAnimate("Works")}
          style={{ backdropFilter: "blur(10px)" }}
          colorScheme={useColorModeValue("red", "gray")}
        ></IconButton>
      </LinkItem>
    </>
  );
};

const mapStateToProps = (state) => ({
  animateKey: state.main,
});

const mapDispatchToProps = {
  setAnimate: setAnimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
