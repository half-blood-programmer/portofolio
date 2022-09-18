import {
  Box,
  IconButton,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const [mode, setMode] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
    console.log("im clikced");

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
            float: "right",
            margin: "-6px 0 0 -16px",
            backgroundColor: "transparent",
            w: "50px",
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

export default ThemeToggleButton;
