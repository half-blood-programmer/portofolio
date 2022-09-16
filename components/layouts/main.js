import Head from "next/head";
import { Box, Container, Link, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import PortofolioIcon from "../portofolio-icon";
import NoSsr from "../no-ssr.js";
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Adam Junio - Homepage</title>
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
