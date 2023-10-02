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
  const imageArray = ["21dn6-01.png", "21dn6-02.png", "21dn6-03.png"];

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
    <Layout title="Dies Natalis VI-rtual Zone PKN STAN">
      <Container>
        <Title>
          Dies Natalis VI-rtual Zone PKN STAN{" "}
          <Badge p={1} mb={1} bgColor="green.600">
            2021
          </Badge>
        </Title>
        <Paragraph>
          PKN STAN is an official higher education under the Financial Education
          and Training Agency, Ministry of Finance of the Republic of Indonesia.{" "}
          <b>2021 is the 6th anniversary of PKN STAN</b> has been established as
          a polytechnic. Due to pandemic, this event is held online.
        </Paragraph>
        <Paragraph>
          A website can make the sounding of an event better. Moreover, the
          concept of the website <b>is not monotonous like this website</b>{" "}
          which has a concept such as a 2D floor plan from the campus, with each
          building having its own information.
        </Paragraph>
        <WorkImage
          alt="Dies Natalis VI-rtual Zone PKN STAN"
          src={`/images/works/${imageZero}`}
        ></WorkImage>
        <Flex gap={5} mb={5}>
          <Box onClick={handleClickOne}>
            <WorkImageCarousel
              src={`/images/works/${imageOne}`}
              alt="Dies Natalis VI-rtual Zone PKN STAN"
            ></WorkImageCarousel>
          </Box>
          <Box onClick={handleClickTwo}>
            <WorkImageCarousel
              src={`/images/works/${imageTwo}`}
              alt="Dies Natalis VI-rtual Zone PKN STAN"
            ></WorkImageCarousel>
          </Box>
        </Flex>

        <Paragraph>
          This website aims to invite students to feel like returning to campus,
          which at that time was studying from home. With this concept, the map
          from the campus on this website is used as a medium for conveying
          information on the lot of PKN STAN&apos;s VI Anniversary activities.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>DEMO</Meta>
            <Link
              href="https://dies-natalis-vi-rtual-zone-2021.vercel.app/"
              target={"_blank"}
            >
              dies-natalis-vi-rtual-zone-2021.vercel.app
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>React, CSS, Firebase </span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/half-blood-programmer/dies-natalis-vi-rtual-zone-2021"
              target={"_blank"}
              colorScheme={useColorModeValue("red", "gray")}
            >
              <Icon as={GoMarkGithub} /> adamjunios
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
