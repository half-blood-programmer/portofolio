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
import { ResponsiveAreaBump } from "@nivo/bump";

const Skills = ({ skillsData }) => (
  <>
    <Heading as="h3" fontSize={20} mb={3} mt={10}>
      My Language Time to Time,
    </Heading>
    <Box
      sx={{
        height: "300px",
        bgColor: "#bee3f80f",
        borderRadius: "10px",
      }}
    >
      <ResponsiveAreaBump
        data={skillsData}
        margin={{ top: 40, right: 90, bottom: 40, left: 40 }}
        spacing={8}
        colors={{ scheme: "nivo" }}
        theme={{ textColor: "rgb(243 135 118)", fontSize: "12px" }}
        blendMode="normal"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#ffffff",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#ffffff",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "CoffeeScript",
            },
            id: "dots",
          },
          {
            match: {
              id: "TypeScript",
            },
            id: "lines",
          },
        ]}
        startLabel={false}
        tooltip="id"
        endLabel="id"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
      />
    </Box>
  </>
);

export default Skills;
