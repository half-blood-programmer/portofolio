import { Container, Heading, useColorModeValue, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { connect } from "react-redux";
import { setAnimate } from "../store/actions/";

const LinkItem = ({ href, path, children }) => {
  return (
    <NextLink href={href}>
      <Link p={2}>{children}</Link>
    </NextLink>
  );
};

const Page = (props) => {
  const { path } = props;
  const { animateKey, setAnimate } = props;

  return (
    <Layout title="Homepage - Adamjunios">
      <Container>
        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="index-title"
            sx={{ fontWeight: "500", lineHeight: 1.6 }}
          >
            <b>👋Hey!, I'm Adam and i love to code. </b>
            Here you can find
            <button type="button" onClick={() => setAnimate("Bio")}>
              <LinkItem href="/bio" path={path}>
                about me
              </LinkItem>
            </button>
            and some of
            <button type="button" onClick={() => setAnimate("Works")}>
              <LinkItem href="/works" path={path}>
                my works
              </LinkItem>
            </button>
            , or maybe you want to
            <button type="button" onClick={() => setAnimate("Works")}>
              <LinkItem href="/works" path={path}>
                discuss
              </LinkItem>
            </button>
            your project, eh?
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
