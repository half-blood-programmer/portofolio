import NextLink from "next/link";
import { useColorModeValue, Link } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdSettings, MdHomeFilled } from "react-icons/md";
import { connect } from "react-redux";
import { setanimate } from "../store/actions/";

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link p={2}>{children}</Link>
    </NextLink>
  );
};

const Logo = (props) => {
  const { path } = props;
  const { setanimate } = props;
  const activeHome = path === "/";
  const activeWorks = path === "/bio" || path === "/" || path === "/works";

  // alert(path);
  return (
    <>
      <LinkItem href="/">
        <IconButton
          icon={
            <Icon
              as={MdHomeFilled}
              color={useColorModeValue("red", "gray")}
              marginTop={1}
            />
          }
          variant="outline"
          display={activeHome ? "none" : "inline-block"}
          aria-label="Options"
          onClick={() => setanimate("Home")}
          style={{ backdropFilter: "blur(10px)" }}
          borderColor={useColorModeValue("red", "gray")}
        ></IconButton>
      </LinkItem>
      <LinkItem href="/works">
        <IconButton
          display={activeWorks ? "none" : "inline-block"}
          icon={
            <Icon
              as={MdSettings}
              color={useColorModeValue("red", "gray")}
              marginTop={1}
            />
          }
          variant="outline"
          aria-label="Options"
          onClick={() => setanimate("Works")}
          style={{ backdropFilter: "blur(10px)" }}
          borderColor={useColorModeValue("red", "gray")}
        ></IconButton>
      </LinkItem>
    </>
  );
};

const mapStateToProps = (state) => ({
  animatekey: state.main,
});

const mapDispatchToProps = {
  setanimate: setanimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
