import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import pic20mbm01 from "../public/images/works/20mbm-01.png";
import pic20prpn01 from "../public/images/works/20prpn-01.png";
import pic20siwi2001 from "../public/images/works/20siwi20-01.png";
import pic21dn601 from "../public/images/works/21dn6-01.png";
import pic21siwi2101 from "../public/images/works/21siwi21-01.png";
import pic22auditphoria01 from "../public/images/works/22auditphoria-01.png";
import pic22dn701 from "../public/images/works/22dn7-01.png";
import pic23just01 from "../public/images/works/23just-01.png";

import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout title="Works - AdamjunioS">
      <Container>
        <Heading as="h3" fontSize={26} mb={6}>
          My Project Experiences
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="si-web-just-sitp"
              title="Just (Tinjau Surat Tugas) SITP"
              thumbnail={pic23just01}
            >
              An information system that streamlines the management, tracking,
              and analysis of employee tasks based on Employee Assignment
              Letters (Surat Tugas/ST)
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-diesnatalisviilink"
              title="Dies Natalis VII Link PKN STAN"
              thumbnail={pic22dn701}
            >
              Information system in the form of a collection of nested or
              multi-level links for the PKN STAN 7th Anniversary event
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-auditphoria2022"
              title="Web-based Test Auditphoria3.0"
              thumbnail={pic22auditphoria01}
            >
              Web-based test system for audit competition on Auditphoria3.0
              organized by the Student Affairs Audit Board of PKN STAN
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-diesnatalisvipknstan"
              title="Dies Natalis VI-rtual Zone PKN STAN"
              thumbnail={pic21dn601}
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
              thumbnail={pic21siwi2101}
            >
              Web-based information system used to register for the 2021 PKN
              STAN Graduation Ceremony
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-siwi2020"
              title="Sistem Informasi Wisudawan 2020 Admin"
              thumbnail={pic20siwi2001}
            >
              Administrative web-based system that is used to manage information
              and registration for the 2020 PKN STAN graduation ceremony
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-mbmpknstan"
              title="Masjid Baitul Maal PKN STAN"
              thumbnail={pic20mbm01}
            >
              Official website that contains all information on activities from
              Islamic organizations in PKN STAN, namely the Masjid Baitul Maal
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-prpn2020"
              title="Pekan Raya Perpajakan Nasional 2020"
              thumbnail={pic20prpn01}
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
