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
  Stat,
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
import Statistic from "./bio/stat";
import { skillsData } from "./bio/skillsData";
import { exeperienceData } from "./bio/experienceData";
import { statData } from "./bio/statData";
import Educational from "./bio/educational";

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
        <Statistic statData={statData} />
      </Section>
      <Section delay={0.3}>
        <Educational />
      </Section>

      <Section delay={0.4}>
        <Skills skillsData={skillsData} />
      </Section>

      {/* <Section delay={0.5}>
        <Experience exeperienceData={exeperienceData} />
      </Section> */}
    </Container>
  </Layout>
);

export default Bio;
