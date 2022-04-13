import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbInkdrop from "../public/images/works/inkdrop_01.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={3}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid column={[1, 2, 2]} gap={6}>
          <GridItem
            title="Post 1"
            thumbnail={thumbInkdrop}
            href="https://www.youtube.com"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
