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
  const imageArray = ["23just-01.png", "23just-02.png", "23just-03.png"];

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
    <Layout title="Just (Tinjau Surat Tugas) SITP">
      <Container>
        <Title>
          Just (Tinjau Surat Tugas) SITP{" "}
          <Badge p={1} mb={1} bgColor="green.600">
            2023
          </Badge>
        </Title>
        <Paragraph>
          The JuST SITP Information System is designed to facilitate the
          effective and transparent management of employee tasks based on
          Employee Assignment Letters (Surat Tugas/ST). This dashboard presents
          various Tasks-related information, including the list of employees
          receiving ST, activity details, and event locations. With an intuitive
          interface and simple navigation, users can easily access the main page
          and two primary dashboards: Dash 1, which displays employee and ST
          statistics, and Dash 2, which provides data on ST locations through
          tables and an interactive map.
        </Paragraph>
        <Paragraph>
          One of the key features of this system is its ability to sort and
          filter data according to user needs. Users can filter data based on
          various categories, such as activity name, ST number, employee, role
          in the activity, ST status, organizer, event date, and location. These
          filtering options allow for quick and efficient information retrieval,
          enabling users to analyze data easily. Additionally, the system offers
          data visualization in the form of tables, bar charts, and maps, making
          the presented information more comprehensible.
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
          Additionally, the JuST SITP system is equipped with a data extraction
          feature for Employee Assignment Letters (Surat Tugas/ST). Using text
          processing technology, the system can automatically retrieve key
          information from ST documents, such as employee names, ST numbers,
          event dates, organizers, and activity details. The extracted data can
          be seamlessly integrated into the database without the need for manual
          input, reducing errors and speeding up information management. This
          feature ensures that all ST information is well-documented and can be
          accessed efficiently through the dashboard.
        </Paragraph>
        <Paragraph>
          In conclusion, the JuST SITP system simplifies the management of
          Employee Assignment Letters (ST) by automating tracking, filtering,
          and data extraction. It saves time, reduces errors, and ensures easy
          access to accurate information for better decision-making.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>GUIDE</Meta>
            <Link
              href="https://docs.google.com/document/d/1d_1dQ4SGvXtUrJ0JZN0Pw3BPf5QX6vz3XrPSxSnAiok/edit?usp=sharing"
              target={"_blank"}
            >
              Panduan Pemakaian Just SITP
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>React, Python, Firebase, LookerStudio </span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link>PRIVATE</Link>
          </ListItem>
          <ListItem>
            <Meta>Colabs</Meta>
            <Link>OJT SITP 2023 Team</Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
