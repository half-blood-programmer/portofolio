import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Box,
  Flex,
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
import { useState } from "react";
const Work = () => {
  const imageArray = ["20mbm-01.png", "20mbm-02.png", "20mbm-03.png"];

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
          src={`/images/works/${imageZero}`}
          alt="Masjid Baitul Maal PKN STAN"
        ></WorkImage>
        <Flex gap={5} mb={5}>
          <Box onClick={handleClickOne}>
            <WorkImageCarousel
              src={`/images/works/${imageOne}`}
              alt="Masjid Baitul Maal PKN STAN"
            ></WorkImageCarousel>
          </Box>
          <Box onClick={handleClickTwo}>
            <WorkImageCarousel
              src={`/images/works/${imageTwo}`}
              alt="Masjid Baitul Maal PKN STAN"
            ></WorkImageCarousel>
          </Box>
        </Flex>

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
