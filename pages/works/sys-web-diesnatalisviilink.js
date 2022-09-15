import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Dies Natalis VII Link PKN STAN">
      <Container>
        <Title>
          Dies Natalis VII Link PKN STAN{" "}
          <Badge p={1} mb={1} bgColor="green.400">
            2022
          </Badge>
        </Title>
        <Paragraph>
          State Finance Polytechnic STAN is one of the leading universities in
          Indonesia. PKN STAN is an official higher education under the
          Financial Education and Training Agency, Ministry of Finance of the
          Republic of Indonesia. <b>2022 is the 7th anniversary of PKN STAN</b>{" "}
          has been established as a polytechnic.
        </Paragraph>
        <Paragraph>
          At the 7th Anniversary, <b>there are many activities held</b>, ranging
          from webinars, art space, color runs, academic competitions, to sports
          competitions. To support the event, a website is needed that
          <b> integrates all registration links and information </b> on each
          activity. Therefore, this project was formed.
        </Paragraph>
        <WorkImage
          src="/images/works/inkdrop_01.png"
          alt="Dies Natalis VII Link PKN STAN"
        ></WorkImage>

        <Paragraph>
          This website displays multi-level links as is usually found in nested
          menus. The initial data taken from the database is level 1, then when
          pressing the option level 1, bunch of level 2 link will appear based
          on the selected option. Other features in this web is when we press
          the icon in the option, an activity poster will appear as information
          for visitors.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link>INACTIVE</Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>React.js, Scss, Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <LockIcon /> Private
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
