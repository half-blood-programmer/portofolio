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
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
// import { GridItem } from "../components/grid-item";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoMail,
} from "react-icons/io5";

const Page = () => {
  return (
    <Layout title="Homepage">
      <Container>
        <Section delay={0.2}>
          <Heading as="h3" variant="index-title">
            Hello 👋 I'm Adam and i love to code.{" "}
            {/* <Heading variant="section-title">
            </Heading>{" "}
            May you want to see my works on that rack? */}
          </Heading>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
