import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Heading,
} from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";

const exeperienceData = {
  w: {
    title: "MBM PKN STAN",
    year: "2019 - 2020",
    desc: "blah blah blah ",
  },
  q: {
    title: "Pasmaga SMNK N 1 Wonosobo",
    year: "2017-2019",
    desc: "blah blah blah",
  },
};

const experience_keys = Object.values(exeperienceData);

const Skills = () => (
  <>
    <Heading as="h3" fontSize={20} mb={3} mt={4}>
      What I can,
    </Heading>
    <Accordion
      allowToggled
      sx={{
        bgColor: "#bee3f80f",
        borderRadius: "10px",
      }}
    >
      {experience_keys.map((val) => {
        return (
          <AccordionItem key={val.title}>
            <AccordionButton>
              <Box flex="1" textAlign={"left"}>
                {val.title} <Badge mb={1}>{val.year}</Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Paragraph>{val.desc}</Paragraph>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  </>
);

export default Skills;
