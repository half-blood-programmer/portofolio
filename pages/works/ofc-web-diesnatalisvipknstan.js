import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { GoMarkGithub } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
const Work = () => {
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
          src="/images/works/21dn6-01.png"
          alt="Dies Natalis VI-rtual Zone PKN STAN"
        ></WorkImage>

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
              href="https://github.com/adamjunios/dies-natalis-vi-rtual-zone-2021"
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
