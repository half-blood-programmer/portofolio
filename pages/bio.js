import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Table,
  Td,
  Tr,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import Paragraph from "../components/paragraph";
import thumbInkdrop from "../public/images/works/inkdrop_01.png";
import { GoPrimitiveDot } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
import Experience from "./bio/experience";
import Skills from "./bio/skils";

const Bio = () => (
  <Layout title="Bio">
    <Container>
      <Section delay={0.1}>
        <Heading
          as="h3"
          letterSpacing={2}
          fontSize={26}
          textAlign={"center"}
          mb={3}
        >
          /A
          <Icon as={GoPrimitiveDot} pt={3} />
          dam/ /Ju
          <Icon as={GoPrimitiveDot} pt={3} />
          ni
          <Icon as={GoPrimitiveDot} pt={3} />
          o/ /Sel
          <Icon as={GoPrimitiveDot} pt={3} />
          va/
        </Heading>
      </Section>
      <Section delay={0.2}>
        <Paragraph>
          [noun]
          <Icon as={GoPrimitiveDot} pt={2} />a human you can call "Adam".{" "}
          <b>He has a lot of interest in programming </b> since he was in high
          school. Most of the programming languages ​​he is fluent in are web
          programming language, and meatballs (if you ask him his favorite
          food). Now that he has completed his education at PKN STAN, Adam
          continues to improve and hone programming skills.{" "}
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={3} mt={4}>
          Educational Background
        </Heading>
        <Table
          sx={{
            bgColor: "#bee3f80f",
            borderRadius: "10px",
          }}
        >
          <Tr>
            <Td rowSpan={2}>Vocational High School 1 Wonosobo</Td>
            <Td>Major Software Engineering</Td>
          </Tr>
          <Tr>
            <Td fontSize={12}>
              Completed education on time in 2019, with an average school exam
              score of 8.9
            </Td>
          </Tr>
          <Tr>
            <Td rowSpan={2} borderBottom={"none"}>
              State Financial Polytechnic STAN
            </Td>
            <Td>Major State Treasury</Td>
          </Tr>
          <Tr>
            <Td fontSize={12} borderBottom={"none"}>
              Completed education on time in 2022, with GPA score 3,67
            </Td>
          </Tr>
        </Table>
      </Section>

      <Section delay={0.5}>
        <Skills />
      </Section>

      <Section delay={0.4}>
        <Experience />
      </Section>
    </Container>
  </Layout>
);

export default Bio;
