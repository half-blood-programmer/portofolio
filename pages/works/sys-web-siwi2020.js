import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { GoMarkGithub } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
const Work = () => {
  return (
    <Layout title="Sistem Informasi Wisudawan 2020 Admin">
      <Container>
        <Title>
          Sistem Informasi Wisudawan 2020 Admin{" "}
          <Badge p={1} mb={1} bgColor="green.800">
            2020
          </Badge>
        </Title>
        <Paragraph>
          PKN STAN annually holds a Wisuda Akbar as part of the end of student
          education. In 2020 the Wisuda Akbar PKN STAN is first time will be
          held online due to the covid-19 pandemic.
        </Paragraph>
        <Paragraph>
          <b>
            information system is needed to to support the Wisuda Akbar PKN STAN
            2020 event
          </b>{" "}
          With this system will make lot easier for graduates to register and
          get information about the graduation ceremony . Therefore, this
          project was formed.
        </Paragraph>
        <WorkImage
          src="/images/works/20siwi20-01.png"
          alt="Sistem Informasi Wisudawan 2020 Admin"
        ></WorkImage>

        <Paragraph>
          This system focuses on managing data that has been obtained from
          graduates (Admin System). Some of the data handled by this system are
          personal data, payments, and other needs.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>Website</Meta>
            <Link>INACTIVE</Link>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>Laravel, Vue.js, CSS, Xendit</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <LockIcon /> Private
          </ListItem>
          <ListItem>
            <Meta>Colabs</Meta>
            <Link
              href="https://github.com/mikeyXmomo"
              target={"_blank"}
              colorScheme={useColorModeValue("red", "gray")}
            >
              <Icon as={GoMarkGithub} /> mikeyXmomo
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
