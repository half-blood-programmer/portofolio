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
import { ResponsiveStream } from "@nivo/stream";
import { ResponsiveAreaBump } from "@nivo/bump";
import { ResponsiveRadar } from "@nivo/radar";

const Statistic = ({ statData }) => (
  <>
    <Box
      sx={{
        height: "280px",
        borderRadius: "10px",
      }}
    >
      <ResponsiveRadar
        data={statData}
        keys={["stats"]}
        indexBy="id"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        theme={{ textColor: "#cfac8e", fontSize: "12px" }}
        colors={{ scheme: "nivo" }}
        blendMode="normal"
        motionConfig="wobbly"
        sliceTooltip="id"
      />
    </Box>
    <Paragraph>
      <b>The radar above is not a constellation</b>, but a representation of the
      skills I have. Yes, apart from web programming, I also have other skills
      of course ...
    </Paragraph>
  </>
);

export default Statistic;
