import React, { useState, useEffect, useRef, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import { setanimate, setloadanimate } from "../store/actions/";
import nprogress from "nprogress";

const Spline = React.lazy(() => {
  nprogress.start();
  return Promise.all([
    import("@splinetool/react-spline"),
    // new Promise((resolve) => {
    //   setTimeout(resolve, 3000);
    // }),
  ]).then(([moduleExports]) => {
    nprogress.done();
    return moduleExports;
  });
});

const PortofolioIcon = (props) => {
  const [animateTrigger, setAnimateTrigger] = useState("blah");
  const spline = useRef();
  const { animatekey, setloadanimate } = props;
  const [currentAnimation, setCurrentAnimation] = useState("blah");
  const [currentAnimationRotate, setCurrentAnimationRotate] = useState(false);

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;

    setloadanimate("complete");
    console.log("animation is completed load");
  }
  useEffect(() => {
    setAnimateTrigger(animatekey.animatekey);
  }, [animatekey.animatekey]);

  useEffect(() => {
    switch (animateTrigger) {
      case "Bio":
        clearAnimation();
        triggerAnimationBio();
        break;
      case "Works":
        clearAnimation();
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

  function triggerAnimationRotate() {
    if (currentAnimationRotate) {
      spline.current.emitEventReverse("keyDown", "Group");
    } else {
      spline.current.emitEvent("keyDown", "Group");
    }
    console.log("animation rotate is run");
  }

  function triggerAnimationBio() {
    spline.current.emitEvent("keyDown", "Headfull");
    setCurrentAnimation("Bio");
    // triggerAnimationRotate();

    // setCurrentAnimationRotate(!currentAnimationRotate);
    console.log("animation for Bio is run");
  }

  function triggerAnimationWorks() {
    spline.current.emitEvent("keyDown", "computer");
    setCurrentAnimation("Works");
    // triggerAnimationRotate();

    // setCurrentAnimationRotate(!currentAnimationRotate);
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
    console.log(currentAnimation);
    switch (currentAnimation) {
      case "Bio":
        spline.current.emitEventReverse("keyDown", "Headfull");
        break;
      case "Works":
        spline.current.emitEventReverse("keyDown", "computer");
        break;
    }
    triggerAnimationRotate();
    setCurrentAnimationRotate(!currentAnimationRotate);

    setCurrentAnimation("blah");
    console.log("all animation is back to base state");
  }

  console.log("welcome to adamjunios.space");

  return (
    <Box
      className="potofolio-icon"
      m="auto"
      mt={["-20px", "-60px", "-100px"]}
      mb={["-20px", "-140px", "-200px"]}
      w={[320, 600, 760]}
      h={[380, 420, 640]}
      position="relative"
    >
      <Suspense>
        <Spline
          // scene="https://prod.spline.design/aXwFM3iYJgvwJ3ED/scene.splinecode"
          scene="https://draft.spline.design/VASgCcHhJsnMH35n/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(PortofolioIcon);
