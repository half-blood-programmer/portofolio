import {
  Box,
  Link,
  Heading,
  MenuItem,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";
import { IoLogoTwitter } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import { AiFillInstagram, AiFillGoogleCircle } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box flex={1} align="left">
      <Box
        ml={2}
        display={{ base: "inline-block" }}
        style={{ backdropFilter: "blur(10px)" }}
        mb={6}
      >
        <Heading
          as="h6"
          size="md"
          p={1}
          fontSize={18}
          letterSpacing={"tighter"}
        >
          Catch me Up!
        </Heading>

        <MenuItem justifyContent={"start"}>
          <Link
            href="https://mailto:adamjunioselvaa@gmail.com"
            target={"_blank"}
            display={"flex"}
            alignItems={"end"}
            gap={2}
            textDecoration={"none"}
            color={useColorModeValue("gray.500", "white")}
          >
            <Icon as={AiFillGoogleCircle} fontSize={22} />
            <Text> adamjunioselvaa</Text>
          </Link>
        </MenuItem>
        <MenuItem justifyContent={"start"}>
          <Link
            href="https://github.com/adamjunios"
            target={"_blank"}
            display={"flex"}
            alignItems={"end"}
            gap={2}
            textDecoration={"none"}
            color={useColorModeValue("gray.500", "white")}
          >
            <Icon as={GoMarkGithub} fontSize={22} />
            <Text> adamjunios</Text>
          </Link>
        </MenuItem>
        <MenuItem justifyContent={"start"}>
          <Link
            href="https://instagram.com/adamjunios"
            target={"_blank"}
            display={"flex"}
            alignItems={"end"}
            gap={2}
            textDecoration={"none"}
            color={useColorModeValue("gray.500", "white")}
          >
            {" "}
            <Icon as={AiFillInstagram} fontSize={22} /> adamjunios
          </Link>{" "}
        </MenuItem>
        <MenuItem justifyContent={"start"}>
          <Link
            href="https://twitter.com/adamjunios"
            target={"_blank"}
            display={"flex"}
            alignItems={"end"}
            gap={2}
            textDecoration={"none"}
            color={useColorModeValue("gray.500", "white")}
          >
            <Icon as={IoLogoTwitter} fontSize={22} /> adamjunios
          </Link>{" "}
        </MenuItem>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  animateKey: state.main,
});

const mapDispatchToProps = {
  setAnimate: setAnimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
