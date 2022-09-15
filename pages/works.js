import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbInkdrop from "../public/images/works/inkdrop_01.png";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={26} mb={6}>
          My Project Experiences
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="sys-web-diesnatalisviilink"
              title="Dies Natalis VII Link PKN STAN"
              thumbnail={thumbInkdrop}
            >
              Information system in the form of a collection of nested or
              multi-level links for the PKN STAN 7th Anniversary event
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-auditphoria2022"
              title="Web-based Test Auditphoria3.0"
              thumbnail={thumbInkdrop}
            >
              Web-based test system for audit competition on Auditphoria3.0
              organized by the Student Affairs Audit Board of PKN STAN
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-diesnatalisvipknstan"
              title="Dies Natalis VI-rtual Zone PKN STAN"
              thumbnail={thumbInkdrop}
            >
              Official website for the PKN STAN 6th Anniversary celebration
              event which contains activity information in the form of a 2D
              campus map
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-siwi2021"
              title="Sistem Informasi Wisudawan 2021"
              thumbnail={thumbInkdrop}
            >
              Web-based information system used to register for the 2021 PKN
              STAN Graduation Ceremony
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-siwi2020"
              title="Sistem Informasi Wisudawan 2020 Admin"
              thumbnail={thumbInkdrop}
            >
              Administrative web-based system that is used to manage information
              and registration for the 2020 PKN STAN graduation ceremony
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-mbmpknstan"
              title="Masjid Baitul Maal PKN STAN"
              thumbnail={thumbInkdrop}
            >
              Official website that contains all information on activities from
              Islamic organizations in PKN STAN, namely the Masjid Baitul Maal
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-prpn2020"
              title="Pekan Raya Perpajakan Nasional 2020"
              thumbnail={thumbInkdrop}
            >
              Official website containing information and registration of
              taxation event activities organized by PUSPA PKN STAN in 2020.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
