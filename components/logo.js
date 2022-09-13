import NextLink from "next/link";
import Image from "next/image";
import { Text, useColorModeValue, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { IconButton, useColorMode, Menu, MenuButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdHomeFilled } from "react-icons/md";
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;

  return (
    <NextLink href={href}>
      <Link p={2} opacity={active ? 0 : 1}>
        {children}
      </Link>
    </NextLink>
  );
};

const Logo = (props) => {
  const { path } = props;
  const { setAnimate } = props;

  return (
    <LinkItem href="/" path={path}>
      <IconButton
        icon={<Icon as={MdHomeFilled} />}
        variant="outline"
        aria-label="Options"
        onClick={() => setAnimate("Home")}
      ></IconButton>
    </LinkItem>
  );
};

const mapStateToProps = (state) => ({
  animateKey: state.main,
});

const mapDispatchToProps = {
  setAnimate: setAnimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
