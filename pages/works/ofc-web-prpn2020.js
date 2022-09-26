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
  const imageArray = ["20prpn-01.png", "20prpn-02.png", "20prpn-03.png"];

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
    <Layout title="Pekan Raya Perpajakan Nasional 2020">
      <Container>
        <Title>
          Pekan Raya Perpajakan Nasional 2020{" "}
          <Badge p={1} mb={1} bgColor="green.800">
            2020
          </Badge>
        </Title>
        <Paragraph>
          Pekan Raya Perpajakan Nasional (PRPN) 2020 is the largest tax event
          organized by the PKN STAN Tax Study Center (PUSPA). The event
          consisted of various activities such as webinars, tax debate
          competitions, essay competitions, etc.
        </Paragraph>
        <Paragraph>
          To support the event,{" "}
          <b>
            an official website is needed as a reliable source of information
            and also the sounding of the event
          </b>
          . In addition, this official website can also be used as a system to
          register for participants. Therefore, this project was formed.
        </Paragraph>
        <WorkImage
          src={`/images/works/${imageZero}`}
          alt="Pekan Raya Perpajakan Nasional 2020"
        ></WorkImage>
        <Flex gap={5} mb={5}>
          <Box onClick={handleClickOne}>
            <WorkImageCarousel
              src={`/images/works/${imageOne}`}
              alt="Pekan Raya Perpajakan Nasional 2020"
            ></WorkImageCarousel>
          </Box>
          <Box onClick={handleClickTwo}>
            <WorkImageCarousel
              src={`/images/works/${imageTwo}`}
              alt="Pekan Raya Perpajakan Nasional 2020"
            ></WorkImageCarousel>
          </Box>
        </Flex>

        <List ml={4} my={6}>
          <ListItem>
            <Meta>Website</Meta>
            <Link>INACTIVE</Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>Laravel, Javascript, CSS, Bootstrap</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <LockIcon /> Private
          </ListItem>
          <ListItem>
            <Meta>Colabs</Meta>
            <Link
              href="https://github.com/walidsj"
              target={"_blank"}
              colorScheme={useColorModeValue("red", "gray")}
            >
              <Icon as={GoMarkGithub} /> walidsj
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
