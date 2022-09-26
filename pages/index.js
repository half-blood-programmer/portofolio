import { Container, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { connect } from "react-redux";
import { setanimate } from "../store/actions/";

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link p={2}>{children}</Link>
    </NextLink>
  );
};

const Page = (props) => {
  const { path } = props;
  const { setanimate } = props;

  return (
    <Layout title="Homepage - Adamjunios">
      <Container>
        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="index-title"
            sx={{ fontWeight: "500", lineHeight: 1.6 }}
          >
            <b>👋Hey!, I&apos;m Adam and i love to code. </b>
            Here you can find
            <button type="button" onClick={() => setanimate("Bio")}>
              <LinkItem href="/bio" path={path}>
                about me
              </LinkItem>
            </button>
            and some of
            <button type="button" onClick={() => setanimate("Works")}>
              <LinkItem href="/works" path={path}>
                my works
              </LinkItem>
            </button>
            , or maybe you want to
            <button type="button">
              <Link
                href="https://mailto:adamjunioselvaa@gmail.com"
                target={"_blank"}
              >
                &nbsp;discuss&nbsp;
              </Link>
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
  setanimate: setanimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
