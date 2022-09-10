import NextLink from "next/link";
import Image from "next/image";
import { Text, useColorModeValue, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { IconButton, useColorMode, Menu, MenuButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdHomeFilled } from "react-icons/md";

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
  return (
    <LinkItem href="/" path={path}>
      <IconButton
        icon={<Icon as={MdHomeFilled} />}
        variant="outline"
        aria-label="Options"
      ></IconButton>
    </LinkItem>
  );
};

export default Logo;
