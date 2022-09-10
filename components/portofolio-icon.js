import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
} from "react";
import { Box, Spinner, useColorModeValue, Link } from "@chakra-ui/react";
import NextLink from "next/link";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { loadGLTFModel } from "../lib/model";
// import Spline from "@splinetool/react-spline";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const idIcon = {
  all: "245A0CA7-6671-4DEA-A0B1-1FFD2D59A580",
  rack1: "9e5c9b89-c331-4767-ab23-ee5b65ba810e",
  rack2: "4248fcaf-5396-4f10-a52c-c92b20f81515",
  rack3: "836fcaed-18f8-4fe6-a0c0-fd1b6e574e4a",
  headLamp: "2EEE29F2-9FE7-4CF6-BD49-81BB2AF141D8",
};

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "#a0f4ff" : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const PortofolioIcon = (props) => {
  const { path } = props;
  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  function triggerAnimation() {
    spline.current.emitEvent("mouseHover", "Group");
    console.log("clicking trigger animation");
  }

  function onMouseDown(e) {
    if (e.target.uuid === "245a0ca7-6671-4dea-a0b1-1ffd2d59a580") {
      console.log("Rack have been clicked!");
    }
    alert("blah");
    console.log("Icon have been clicked!");
  }

  return (
    <Box
      className="potofolio-icon"
      m="auto"
      mt={["-20px", "-60px", "-120px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[280, 640, 800]}
      h={[280, 600, 640]}
      position="relative"
    >
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Spline
        scene="https://prod.spline.design/Fja4yvOJyNqnhjB8/scene.splinecode"
        // onClick={onMouseDown}
        onLoad={onLoad}
      />
      <LinkItem href="/posts" path={path}>
        <button type="button" onClick={triggerAnimation}>
          Trigger Spline Animation
        </button>
      </LinkItem>
      {/* <Spline scene="https://prod.spline.design/nd7AoAabnYn1YHHL/scene.splinecode" /> */}
      {/* </Suspense> */}
    </Box>
  );
};

export default PortofolioIcon;
