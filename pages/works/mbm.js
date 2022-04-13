import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="MBM Official Website">
      <Container>
        <Title>
          MBM Official Website <Badge>2020</Badge>
        </Title>
        <Paragraph>
          Blah blah this is description detail for mbm official website
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.mbmpknstan.id/">
              https://www.mbmpknstan.id/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOs/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Html, CSS, PHP, JS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/inkdrop_01.png" alt="mbm"></WorkImage>
      </Container>
    </Layout>
  );
};

export default Work;
