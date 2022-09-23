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

const Experience = ({ exeperienceData }) => {
  const experience_res = Object.values(exeperienceData);
  return (
    <>
      <Heading as="h3" fontSize={20} mb={3} mt={10}>
        Organizational and Committee Experience
      </Heading>
      <Accordion
        allowToggle
        sx={{
          bgColor: "#bee3f80f",
          borderRadius: "10px",
        }}
      >
        {experience_res.map((val) => {
          return (
            <AccordionItem
              borderBottom={
                val.title === "Pasmaga SMK N 1 Wonosobo"
                  ? "none"
                  : "1px solid #ffffff1a"
              }
              borderTop={"none"}
            >
              <AccordionButton>
                <Box flex="1" textAlign={"left"}>
                  {val.title ? val.title : ""}{" "}
                  <Badge mb={1}>{val.year ? val.year : ""}</Badge>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Paragraph>{val.desc ? val.title : ""}</Paragraph>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Experience;
