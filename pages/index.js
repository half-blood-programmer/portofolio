import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  Icon,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";

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

const Page = (props) => {
  const { path } = props;
  const { animateKey, setAnimate } = props;

  return (
    <Layout title="Homepage">
      <Container>
        <Section delay={0.2}>
          <Heading as="h3" variant="index-title">
            Hello 👋 I'm Adam and i love to code.{" "}
            <button type="button" onClick={() => setAnimate("Bio")}>
              <LinkItem href="/bio" path={path}>
                Bio
              </LinkItem>
            </button>
            <button type="button" onClick={() => setAnimate("Works")}>
              <LinkItem href="/works" path={path}>
                Works
              </LinkItem>
            </button>
            <button type="button" onClick={() => setAnimate("Home")}>
              <LinkItem href="/" path={path}>
                Home
              </LinkItem>
            </button>
            <br></br>
            {animateKey.animateKey}
          </Heading>
        </Section>
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  animateKey: state.main,
});

const mapDispatchToProps = {
  setAnimate: setAnimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
