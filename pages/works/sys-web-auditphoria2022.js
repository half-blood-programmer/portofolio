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
import { LockIcon } from "@chakra-ui/icons";
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
    "22auditphoria-01.png",
    "22auditphoria-02.png",
    "22auditphoria-03.png",
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
    <Layout title="Web-based Test Auditphoria3.0">
      <Container>
        <Title>
          Web-based Test Auditphoria3.0{" "}
          <Badge p={1} mb={1} bgColor="green.400">
            2022
          </Badge>
        </Title>
        <Paragraph>
          <b>Auditphoria3.0 is an audit-themed event</b> organized by the
          Student Audit Board (BAK) PKN STAN in 2022. One of the activities held
          at the event is the Audit Competition.
        </Paragraph>
        <Paragraph>
          Audit Competition is a competition group which is intended to test
          knowledge and student skills in the field of auditing. This
          competition consists of 3 round, the first is Prelude: The Escape
          Round which is a preliminary round.{" "}
          <b>
            Due to the situation at that time during the pandemic, the
            preliminary round was conducted online based on the web.
          </b>{" "}
          Therefore, this project was formed.
        </Paragraph>
        <WorkImage
          src={`/images/works/${imageZero}`}
          alt="Web-based Test Auditphoria3.0"
        ></WorkImage>
        <Flex gap={5} mb={5}>
          <Box onClick={handleClickOne}>
            <WorkImageCarousel
              src={`/images/works/${imageOne}`}
              alt="Web-based Test Auditphoria3.0"
            ></WorkImageCarousel>
          </Box>
          <Box onClick={handleClickTwo}>
            <WorkImageCarousel
              src={`/images/works/${imageTwo}`}
              alt="Web-based Test Auditphoria3.0"
            ></WorkImageCarousel>
          </Box>
        </Flex>

        <Paragraph>
          This website displays multi-level links as is usually found in nested
          menus. The initial data taken from the database is level 1, then when
          pressing the option level 1, bunch of level 2 link will appear based
          on the selected option. Other features in this web is when we press
          the icon in the option, an activity poster will appear as information
          for visitors.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>Website</Meta>
            <Link>INACTIVE</Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>Laravel, Javascript, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <LockIcon /> Private
          </ListItem>
          <ListItem>
            <Meta>Colabs</Meta>
            <Link
              href="https://github.com/fsaditya"
              target={"_blank"}
              colorScheme={useColorModeValue("red", "gray")}
            >
              <Icon as={GoMarkGithub} /> Fsaditya
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
