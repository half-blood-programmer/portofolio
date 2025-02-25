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
          &ldquo;Adam&ldquo;. <b>He has loved programming </b> since high school
          and has been learning and building ever since. He&apos;s skilled in
          web development—and also has a <i>talent for enjoying meatballs</i>.
          After graduating from PKN STAN, he keeps improving his skills,
          creating projects, and learning new things to stay up to date with
          technology.{" "}
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

      {/* <Section delay={0.4}>
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
      </Section> */}
    </Container>
  </Layout>
);

export default Bio;
