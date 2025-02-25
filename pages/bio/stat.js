import { Box } from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
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
        theme={{ textColor: "rgb(243 135 118)", fontSize: "12px" }}
        colors={{ scheme: "nivo" }}
        blendMode="normal"
        motionConfig="wobbly"
        sliceTooltip="id"
      />
    </Box>
    <Paragraph style={{ marginTop: 20 }}>
      Oh, and that radar chart? It&apos;s not a star map—it just shows the
      things he&apos;s good at. Besides web development, he also enjoys{" "}
      <b>
        graphic design, video editing, and exploring other programming areas.
      </b>
    </Paragraph>
  </>
);

export default Statistic;
