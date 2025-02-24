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
    "23simonalisa-01.png",
    "23simonalisa-02.png",
    "23simonalisa-03.png",
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
    <Layout title="Si Monalisa">
      <Container>
        <Title>
          Si Monalisa (Sistim Monitoring Belanja Lintas Satuan Kerja){" "}
          <Badge p={1} mb={1} bgColor="green.600">
            2023
          </Badge>
        </Title>
        <Paragraph>
          Si Monalisa is a web-based dashboard designed to track and analyze the
          spending behavior of various work units under KPPN Nabire. By
          visualizing key financial data such as expenditure trends, spending
          categories, and transaction values, this platform provides a clear and
          data-driven overview of budget utilization. With its intuitive
          interface and real-time insights, Si Monalisa helps stakeholders
          identify spending patterns, detect inefficiencies, and ensure that
          budget allocations are optimized effectively.
        </Paragraph>
        <Paragraph>
          The potential of Si Monalisa lies in its ability to enhance
          transparency and improve financial decision-making. Government
          agencies can use this tool to monitor spending compliance, evaluate
          budget effectiveness, and make data-driven policy adjustments.
          Additionally, work units can leverage the dashboard to track their
          financial performance and improve accountability. By providing a
          comprehensive and accessible view of expenditure data, Si Monalisa
          supports more efficient public financial management and contributes to
          better governance.
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
          Si Monalisa is a task assigned by Kanwil DJPb Provinsi Papua to
          address the challenge of utilizing existing data for deeper analysis.
          This dashboard was developed as a solution to enhance data-driven
          decision-making by transforming raw financial data into meaningful
          insights, allowing for better monitoring, evaluation, and policy
          formulation regarding government spending.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>DEMO</Meta>
            <Link>PRIVATE</Link>
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
