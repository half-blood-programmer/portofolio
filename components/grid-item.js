import NexLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, href, thumbnail }) => (
  <Box w="100%" align="center">
    <NexLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Box position="relative" width="100%" height="140px" overflow="hidden">
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            objectFit="cover" // Ensures it fills the area while maintaining aspect ratio
            className="grid-item-thumbnail"
          />
        </Box>
        <LinkOverlay href={href} target="_blank">
          <Text m={2} fontSize={20} fontWeight="bold">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NexLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
        border-radius:12px;
    }
    `}
  />
);
