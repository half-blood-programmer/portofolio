import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import PortofolioIcon from "../portofolio-icon";
import NoSsr from "../no-ssr.js";
import Router from "next/router";
import nprogress from "nprogress";

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

const Main = ({ children, router }) => {
  console.log("welcome to adamjunios.space");
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Adamjunios</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <PortofolioIcon />
        </NoSsr>

        {children}
      </Container>
    </Box>
  );
};

export default Main;
