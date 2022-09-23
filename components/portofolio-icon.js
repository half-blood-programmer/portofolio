import React, { useState, useEffect, useRef, Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";

const PortofolioIcon = (props) => {
  const [animateTrigger, setAnimateTrigger] = useState("blah");
  const spline = useRef();
  const { animateKey } = props;
  const [currentAnimation, setCurrentAnimation] = useState("blah");

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  useEffect(() => {
    setAnimateTrigger(animateKey.animateKey);
  }, [animateKey.animateKey]);

  useEffect(() => {
    switch (animateTrigger) {
      case "Bio":
        triggerAnimationBio();
        break;
      case "Works":
        triggerAnimationWorks();
        break;
      case "Light":
        triggerAnimationLight();
        break;
      case "Dark":
        triggerAnimationDark();
        break;
      case "Home":
        clearAnimation();
        break;
    }
  }, [animateTrigger]);

  function triggerAnimationBio() {
    spline.current.emitEvent("keyDown", "Headfull");
    setCurrentAnimation("Bio");
    console.log("animation for Bio is run");
  }

  function triggerAnimationWorks() {
    spline.current.emitEvent("keyDown", "computer");
    setCurrentAnimation("Works");
    console.log("animation for Works is run");
  }

  function triggerAnimationLight() {
    spline.current.emitEvent("keyDown", "Point Light");
    console.log("is going to dark");
  }

  function triggerAnimationDark() {
    spline.current.emitEventReverse("keyDown", "Point Light");
    console.log("is going to light");
  }
  function clearAnimation() {
    switch (currentAnimation) {
      case "Bio":
        spline.current.emitEventReverse("keyDown", "Headfull");

        break;
      case "Works":
        spline.current.emitEventReverse("keyDown", "computer");

        break;
    }

    setCurrentAnimation("blah");
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
