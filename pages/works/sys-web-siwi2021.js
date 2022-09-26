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
  const imageArray = ["21siwi21-01.png", "21siwi21-02.png", "21siwi21-03.png"];

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
    <Layout title="Sistem Informasi Wisudawan 2021">
      <Container>
        <Title>
          Sistem Informasi Wisudawan 2021{" "}
          <Badge p={1} mb={1} bgColor="green.600">
            2021
          </Badge>
        </Title>
        <Paragraph>
          PKN STAN annually produces quality graduates to build the country. In
          2021 the Wisuda Akbar PKN STAN will be held online due to the covid-19
          pandemic.
        </Paragraph>
        <Paragraph>
          To support the Wisuda Akbar PKN STAN 2021 event, an
          <b>
            information system is needed to make it easier for graduates to
            register and get information about the graduation ceremony
          </b>
          . One of the urgency needs of this system is the system to collect
          personal data and order gowns. Therefore, this project was formed.
        </Paragraph>
        <WorkImage
          src={`/images/works/${imageZero}`}
          alt="Sistem Informasi Wisudawan 2021"
        ></WorkImage>
        <Flex gap={5} mb={5}>
          <Box onClick={handleClickOne}>
            <WorkImageCarousel
              src={`/images/works/${imageOne}`}
              alt="Sistem Informasi Wisudawan 2021"
            ></WorkImageCarousel>
          </Box>
          <Box onClick={handleClickTwo}>
            <WorkImageCarousel
              src={`/images/works/${imageTwo}`}
              alt="Sistem Informasi Wisudawan 2021"
            ></WorkImageCarousel>
          </Box>
        </Flex>

        <Paragraph>
          This Information System has various features in it. Among them are
          account registration, graduation registration, update information,
          personal data collection, to the payment system.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>Website</Meta>
            <Link>INACTIVE</Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>Laravel, Javascript, CSS, Xendit</span>
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
