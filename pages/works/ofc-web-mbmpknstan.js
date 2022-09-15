import { Container, Badge, List, ListItem, Link } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { GoMarkGithub } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
const Work = () => {
  return (
    <Layout title="Masjid Baitul Maal PKN STAN">
      <Container>
        <Title>
          Masjid Baitul Maal PKN STAN{" "}
          <Badge p={1} mb={1} bgColor="green.800">
            2020
          </Badge>
        </Title>
        <Paragraph>
          Masjid Baitul Maal or MBM is an Islamic religious institution as
          stated in the structure of the Student Family Complementary Body for
          PKN STAN.{" "}
          <b>
            The name is taken from the mosque which is the seat of the MBM PKN
            STAN, namely the Baitul Maal Masjid.
          </b>
        </Paragraph>
        <Paragraph>
          Making the official website for MBM PKN STAN can{" "}
          <b>
            increase performance and add alternative information delivery to the
            public
          </b>
          . The existence of this website also adds to the sounding of the MBM
          itself. Therefore, this project was formed.
        </Paragraph>
        <WorkImage
          src="/images/works/inkdrop_01.png"
          alt="Masjid Baitul Maal PKN STAN"
        ></WorkImage>

        <Paragraph>
          This website was created in 2020 which contains various kinds of
          information regarding activities and content created by MBM.
          Furthermore, there is also an information system to manage the
          content.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.mbmpknstan.id/" target={"_blank"}>
              mbmpknstan.id
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>Html, Javascript, CSS, PHP</span>
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
