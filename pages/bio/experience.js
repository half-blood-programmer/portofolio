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
  d: {
    title: "Dies Natalis VII PKN STAN",
    year: "2022",
    desc: "blah blah blah",
  },
  s: {
    title: "Wisuda Akbar PKN STAN",
    year: "2021",
    desc: "blah blah blah",
  },
  a: {
    title: "Dies Natalis VI PKN STAN ",
    year: "2021",
    desc: "blah blah blah",
  },
  p: {
    title: "MBM PKN STAN ",
    year: "2020 - 2021",
    desc: "blah blah blah",
  },
  o: {
    title: "Fesbudnus X FSN",
    year: "2020-2021",
    desc: "blah blah blah",
  },
  i: {
    title: "Wisuda Akbar PKN STAN",
    year: "2020",
    desc: "blah blah blah",
  },
  u: {
    title: "Tax Islamic Fair",
    year: "2020",
    desc: "blah blah blah",
  },
  y: {
    title: "Starring Wonosobo",
    year: "2020",
    desc: "blah blah blah",
  },
  t: {
    title: "Gema Ramadan 1443 H",
    year: "2020",
    desc: "blah blah blah",
  },
  r: {
    title: "Fokri Games",
    year: "2020",
    desc: "blah blah blah",
  },
  e: {
    title: "Pekan Raya Perpajakan Nasional",
    year: "2020",
    desc: "blah blah blah",
  },
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

const Experience = () => (
  <>
    <Heading as="h3" fontSize={20} mb={3} mt={4}>
      Organizational and Committee Experience
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

export default Experience;
