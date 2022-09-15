import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { GoMarkGithub } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
const Work = () => {
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
          src="/images/works/inkdrop_01.png"
          alt="Pekan Raya Perpajakan Nasional 2020"
        ></WorkImage>
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
              sx={{ color: "white" }}
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
