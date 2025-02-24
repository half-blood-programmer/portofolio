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
  const imageArray = ["23tdd-01.png", "23tdd-02.png", "23tdd-03.png"];

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
    <Layout title="Dashboard Ekonomi Regional">
      <Container>
        <Title>
          Regional Economic Condition Dashboard{" "}
          <Badge p={1} mb={1} bgColor="green.600">
            2023
          </Badge>
        </Title>
        <Paragraph>
          The Regional Economic Condition Dashboard is an interactive web-based
          platform designed to provide a comprehensive overview of economic
          conditions across different regions. By visualizing key economic
          indicators such as GDP growth, employment rates, sectoral
          contributions, and investment trends, this dashboard enables
          policymakers, researchers, and businesses to gain valuable insights
          into regional economic performance. With an intuitive interface and
          dynamic data representation, users can analyze trends, compare
          regional economic conditions, and identify areas that require policy
          intervention or investment focus.
        </Paragraph>
        <Paragraph>
          The Regional Economic Condition Dashboard offers significant benefits
          by enhancing data-driven decision-making and promoting economic
          transparency. Government agencies can utilize the dashboard to
          formulate targeted economic policies, allocate resources more
          effectively, and track the impact of policy initiatives over time.
          Businesses and investors can leverage the insights to identify
          high-potential markets, assess economic stability, and make informed
          investment decisions. Additionally, researchers and analysts can use
          the dashboard to study economic disparities and regional development
          patterns, contributing to more equitable and sustainable economic
          growth.
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
          The Dashboard is also recognized for its excellence in data
          visualization and analytical capabilities. It was awarded{" "}
          <b>6th place in the "Treasury Data Dash-off Competition 2023"</b>, a
          prestigious data competition organized by the Directorate General of
          Treasury, Ministry of Finance of Indonesia. This achievement
          highlights the dashboard&apos;s effectiveness in presenting complex
          economic data in an accessible and actionable format, reinforcing its
          potential as a valuable tool for policymakers, businesses, and
          researchers in understanding and improving regional economic
          conditions.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>DEMO</Meta>
            <Link
              href="https://tdd23-dashboard-kondisi-regional.vercel.app/"
              target={"_blank"}
            >
              Regional Economic Condition Dashboard
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
