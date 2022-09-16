import React, { useState, useEffect, useRef, Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";
import Paragraph from "./paragraph";

const PortofolioIcon = (props) => {
  const [animateTrigger, setAnimateTrigger] = useState("blah");
  const spline = useRef();
  const { animateKey } = props;

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  useEffect(() => {
    setAnimateTrigger(animateKey.animateKey);
  }, [animateKey.animateKey]);

  useEffect(() => {
    switch (animateTrigger) {
      case "Rotate":
        triggerAnimationRotate();
        break;
      case "Bio":
        triggerAnimationBio();
        break;
      case "Works":
        triggerAnimationWorks();
        break;
      case "Home":
        clearAnimation();
        break;
    }
  }, [animateTrigger]);

  function triggerAnimationRotate() {
    spline.current.emitEvent("keyDown", "Group");

    console.log("animation rotate is run");
  }

  function triggerAnimationBio() {
    triggerAnimationRotate();

    spline.current.emitEvent("keyDown", "Headfull");

    console.log("animation for Bio is run");
  }

  function triggerAnimationWorks() {
    triggerAnimationRotate();
    spline.current.emitEvent("keyDown", "chair");

    console.log("animation for Works is run");
  }

  function clearAnimation() {
    spline.current.emitEventReverse("keyDown", "Group");
    spline.current.emitEventReverse("keyDown", "Headfull");
    spline.current.emitEventReverse("keyDown", "chair");

    console.log("all animation is back to base state");
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
      <Suspense
        fallback={
          <Spinner
            size="xl"
            position="absolute"
            left="50%"
            top="50%"
            ml="calc(0px - var(--spinner-size)/2)"
            mt="calc(0px - var(--spinner-size))"
          ></Spinner>
        }
      >
        <Spline
          scene="https://prod.spline.design/Fja4yvOJyNqnhjB8/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  animateKey: state.main,
});

const mapDispatchToProps = {
  setAnimate: setAnimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(PortofolioIcon);
