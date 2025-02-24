import {
  Box,
  Link,
  Heading,
  MenuItem,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { setanimate } from "../store/actions/";
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
        mt={8}
      >
        <Heading
          as="h4"
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
            <Icon as={AiFillGoogleCircle} fontSize={16} />
            <Text fontSize={12}> adamjunioselvaa</Text>
          </Link>
        </MenuItem>
        <MenuItem justifyContent={"start"}>
          <Link
            href="https://github.com/half-blood-programmer"
            target={"_blank"}
            display={"flex"}
            alignItems={"end"}
            gap={2}
            textDecoration={"none"}
            color={useColorModeValue("gray.500", "white")}
          >
            <Icon as={GoMarkGithub} fontSize={16} />
            <Text fontSize={12}> adamjunios</Text>
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
            <Icon as={AiFillInstagram} fontSize={16} />{" "}
            <Text fontSize={12}>adamjunios</Text>
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
            <Icon as={IoLogoTwitter} fontSize={16} />
            <Text fontSize={12}>adamjunios</Text>
          </Link>{" "}
        </MenuItem>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  animatekey: state.main,
});

const mapDispatchToProps = {
  setanimate: setanimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
