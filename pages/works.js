import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbInkdrop from "../public/images/works/inkdrop_01.png";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          My Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="mbm" title="mbm" thumbnail={thumbInkdrop}>
              A official website for Masjid Baitul Maal PKN STAN
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop2"
              title="inkdrop 2"
              thumbnail={thumbInkdrop}
            >
              A markdown note 2
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop3"
              title="inkdrop 3"
              thumbnail={thumbInkdrop}
            >
              A markdown note 3
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="inkdrop" title="inkdrop" thumbnail={thumbInkdrop}>
              A markdown note
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop2"
              title="inkdrop 2"
              thumbnail={thumbInkdrop}
            >
              A markdown note 2
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop3"
              title="inkdrop 3"
              thumbnail={thumbInkdrop}
            >
              A markdown note 3
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
