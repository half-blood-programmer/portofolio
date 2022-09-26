import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffeeca", "#303030")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      "index-title": {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4,
        textAlign: "center",
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#f10094", "#00ffb8")(props),
      textDecoration: { sm: "underline", md: "none", base: "none" },
      textUnderlineOffset: 5,
    }),
  },
  IconButton: {
    baseStyle: (props) => ({
      color: mode("#f10094", "#00ffb8")(props),
    }),
  },
};

const shadow = {
  shadow: {
    baseStyle: (props) => ({
      color: mode("#00ffb8", "#f10094")(props),
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  glassTeal: "#88cca",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
  shadow,
});

export default theme;
