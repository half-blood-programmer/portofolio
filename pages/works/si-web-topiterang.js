import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  useColorModeValue,
  Flex,
  Box,
} from "@chakra-ui/react";
import {
  Title,
  WorkImage,
  Meta,
  WorkImageCarousel,
} from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { GoMarkGithub } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
import { useState } from "react";

const Work = () => {
  const imageArray = [
    "24topiterang-01.png",
    "24topiterang-02.png",
    "24topiterang-03.png",
  ];

  const [imageZero, setImageZero] = useState(imageArray[0]);
  const [imageOne, setImageOne] = useState(imageArray[1]);
  const [imageTwo, setImageTwo] = useState(imageArray[2]);

  const handleClickOne = () => {
    let tempImageZero = imageZero;
    let tempImageOne = imageOne;
    setImageZero(tempImageOne);
    setImageOne(tempImageZero);
  };

  const handleClickTwo = () => {
    let tempImageZero = imageZero;
    let tempImageTwo = imageTwo;
    setImageZero(tempImageTwo);
    setImageTwo(tempImageZero);
  };
  return (
    <Layout title="Topi Terang">
      <Container>
        <Title>
          Topi Terang (Telaah Optimalisasi Pendidikan Indonesia Terintegrasi per
          Regional){" "}
          <Badge p={1} mb={1} bgColor="green.600">
            2024
          </Badge>
        </Title>
        <Paragraph>
          Topi Terang is an interactive dashboard designed to analyze the
          effectiveness of education spending across different regions in
          Indonesia. By leveraging data from 2017 to 2022, this platform
          provides a comprehensive view of how budget allocations correlate with
          educational outcomes. Through intuitive visualizations and comparative
          analysis, Topi Terang helps policymakers, researchers, and education
          stakeholders identify spending efficiency, assess regional
          disparities, and make data-driven decisions to optimize resource
          allocation in the education sector.
        </Paragraph>
        <Paragraph>
          The potential of Topi Terang lies in its ability to enhance
          transparency and improve the strategic planning of education funding.
          By offering insights into the return on investment and efficiency of
          spending, this dashboard enables government institutions to refine
          budget policies, prioritize funding where it is most needed, and
          ensure equitable access to quality education. Additionally,
          researchers and education analysts can use Topi Terang to study
          regional trends, identify best practices, and support evidence-based
          policymaking to drive sustainable improvements in Indonesia’s
          education system.
        </Paragraph>
        <WorkImage
          alt="Just (Tinjau Surat Tugas) SITP"
          src={`/images/works/${imageZero}`}
        ></WorkImage>
        <Flex gap={5} mb={5}>
          <Box onClick={handleClickOne}>
            <WorkImageCarousel
              src={`/images/works/${imageOne}`}
              alt="Just (Tinjau Surat Tugas) SITP"
            ></WorkImageCarousel>
          </Box>
          <Box onClick={handleClickTwo}>
            <WorkImageCarousel
              src={`/images/works/${imageTwo}`}
              alt="Just (Tinjau Surat Tugas) SITP"
            ></WorkImageCarousel>
          </Box>
        </Flex>
        <Paragraph>
          Topi Terang achieved{" "}
          <b>5th place in the DJPb Data Analytics Competition 2024</b> in the
          Data Showcase category, an event organized by the Directorate General
          of Treasury, Ministry of Finance of Indonesia. This recognition
          highlights the dashboard&apos;s effectiveness in presenting complex
          education spending data through insightful visualizations, reinforcing
          its value as a tool for policymakers and researchers in optimizing
          education budget allocations across regions.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>DEMO</Meta>
            <Link href="https://topi-terang.vercel.app/" target={"_blank"}>
              Topi Terang
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>React, Tableau </span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link>PRIVATE</Link>
          </ListItem>
          {/* <ListItem>
            <Meta>Colabs</Meta>
            <Link>OJT SITP 2023 Team</Link>
          </ListItem> */}
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
