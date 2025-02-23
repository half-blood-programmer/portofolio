import {
  Container,
  Heading,
  Button,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { GoPrimitiveDot } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
import Skills from "./bio/skils";
import Statistic from "./bio/stat";
import skillsData from "../lib/skillsData";
import statData from "../lib/statData";
import Educational from "./bio/educational";
const Bio = () => (
  <Layout title="Bio - Adamjunios">
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
          <Icon as={GoPrimitiveDot} pt={2} />a human you can call
          &ldquo;Adam&ldquo;. <b>He has a lot of interest in programming </b>{" "}
          since he was in high school. Most of the programming languages ​​he is
          fluent in are web programming language, and meatballs (if you ask him
          his favorite food). Now that he has completed his education at PKN
          STAN, Adam continues to improve and hone programming skills.{" "}
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

      <Section delay={0.4}>
        <Text px={2} py={5} textAlign={"center"}>
          <Link
            href="https://drive.google.com/file/d/1tmEt48HOlbFkIWhdO8fttgTccgUYZcKZ/view?usp=share_link"
            target={"_blank"}
          >
            <Button
              variant="outline"
              borderColor={useColorModeValue("red", "gray")}
            >
              My portofolio in other verse
            </Button>
          </Link>{" "}
        </Text>
      </Section>
    </Container>
  </Layout>
);

export default Bio;
