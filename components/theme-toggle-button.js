import {
  Box,
  IconButton,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setanimate, setloadanimate } from "../store/actions/";

const ThemeToggleButton = (props) => {
  const { toggleColorMode } = useColorMode();
  const [isChecked, setIsChecked] = useState(false);
  const { setanimate, loadanima } = props;
  const [isLoading, setIsLoading] = useState("loading");

  useEffect(() => {
    setIsLoading(loadanima.loadanima);
  }, [loadanima.loadanima]);

  console.log(isLoading);

  useEffect(() => {
    // Perform localStorage action
    const getMode = localStorage.getItem("chakra-ui-color-mode");
    if (getMode === "dark") {
      setIsChecked(true);
    }
  }, []);

  const iconVariants = {
    light: { x: 0 },
    dark: { x: 22 },
  };

  const handleChange = () => {
    console.log("Switching theme");
    if (isLoading === "complete") {
      if (isChecked) {
        setanimate("Dark");
      } else {
        setanimate("Light");
      }
    }
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Switch
        size="lg"
        isChecked={isChecked}
        onChange={handleChange}
        spacing={0}
        paddingLeft={0}
        colorScheme={useColorModeValue("gray", "blackAlpha 900")}
        style={{ backdropFilter: "blur(10px)", borderRadius: "20px" }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 99,
            top: 0,
            textAlign: "left",
            margin: "-6px 0 0 -6px",
            backgroundColor: "transparent",
            w: "70px",
          }}
          onClick={toggleColorMode}
        >
          <motion.div
            style={{ display: "inline-block" }}
            key={useColorModeValue("light", "dark")}
            variants={iconVariants}
            animate={isChecked ? "dark" : "light"}
            exit={isChecked ? "dark" : "light"}
          >
            <IconButton
              aria-label="Toggle theme"
              icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
              onClick={toggleColorMode}
              sx={{
                borderRadius: "100%",
                background: "transparent",
                color: useColorModeValue("red.400", "blue.400"),
              }}
            ></IconButton>
          </motion.div>
        </Box>
      </Switch>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggleButton);
