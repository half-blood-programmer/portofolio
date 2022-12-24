import Head from "next/head";
import { Box, Container, Heading, Spinner } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import PortofolioIcon from "../portofolio-icon";
import NoSsr from "../no-ssr.js";
import Router from "next/router";
import nprogress from "nprogress";
import { connect } from "react-redux";
import { setloadanimate } from "../../store/actions/";
import { useEffect, useState } from "react";

nprogress.configure({
  showSpinner: false,
});

Router.onRouteChangeStart = (url) => {
  console.log("going to " + url);
  nprogress.start();
};

Router.onRouteChangeComplete = (url) => {
  console.log("youre now on " + url);
  nprogress.done();
};

Router.onRouteChangeError = (url) => {
  console.log("sorry, redirecting to " + url + "is unviable");
  nprogress.done();
};

const Main = (props) => {
  const { loadanima, children, router } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(loadanima.loadanima);
  }, [loadanima.loadanima]);

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Adamjunios</title>
      </Head>
      <Navbar path={router.asPath} />

      <NoSsr>
        <Container
          maxW="container.md"
          pt={14}
          display={isLoading === "complete" ? "none" : "display"}
        >
          <Spinner
            size="xl"
            position="absolute"
            left="50%"
            top="50%"
            ml="calc(0px - var(--spinner-size)/2)"
            mt="calc(0px - var(--spinner-size))"
          ></Spinner>
          <Heading
            variant="section-title"
            position={"absolute"}
            bottom={"20"}
            left={"0"}
            right={"0"}
            textAlign={"center"}
          >
            Loading animation...
          </Heading>
        </Container>
        <Container maxW="container.xl" pt={[20, 5, 5]}>
          <PortofolioIcon />
        </Container>
      </NoSsr>
      <Container
        maxW="container.md"
        pt={14}
        display={isLoading === "complete" ? "display" : "none"}
      >
        {children}
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  loadanima: state.load,
});

const mapDispatchToProps = {
  setloadanimate: setloadanimate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
