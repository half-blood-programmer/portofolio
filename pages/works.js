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
import pic23tdd01 from "../public/images/works/23tdd-01.png";
import pic23simonalisa01 from "../public/images/works/23simonalisa-01.png";
import pic24topiterang01 from "../public/images/works/24topiterang-01.png";

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
              id="si-web-topiterang"
              title="Topi Terang"
              thumbnail={pic24topiterang01}
            >
              An interactive data visualization tool that evaluates the
              effectiveness of education spending in Indonesia.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="si-web-simonalisa"
              title="Si Monalisa"
              thumbnail={pic23simonalisa01}
            >
              A dashboard that analyzes KPPN Nabire's spending behavior,
              visualizing expenditures, categories, and transactions for budget
              evaluation.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="si-web-dashboardtdd"
              title="Dashboard Kondisi Ekonomi Regional"
              thumbnail={pic23tdd01}
            >
              A web-based platform that presents and analyzes regional economic
              conditions using key data indicators across various sectors.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="si-web-just-sitp"
              title="Just (Tinjau Surat Tugas) SITP"
              thumbnail={pic23just01}
            >
              An information system that streamlines the management, tracking,
              and analysis of employee tasks based on Assignment Letters (Surat
              Tugas/ST).
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-diesnatalisviilink"
              title="Dies Natalis VII Link PKN STAN"
              thumbnail={pic22dn701}
            >
              A structured multi-level link system designed for the 7th
              Anniversary event of PKN STAN, making event navigation seamless.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-auditphoria2022"
              title="Web-based Test Auditphoria3.0"
              thumbnail={pic22auditphoria01}
            >
              An online test system developed for the Auditphoria 3.0 audit
              competition, organized by the Student Affairs Audit Board of PKN
              STAN.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-diesnatalisvipknstan"
              title="Dies Natalis VI-rtual Zone PKN STAN"
              thumbnail={pic21dn601}
            >
              The official website for PKN STAN&apos;s 6th Anniversary—featuring
              a 2D interactive campus map and event information.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-siwi2021"
              title="Sistem Informasi Wisudawan 2021"
              thumbnail={pic21siwi2101}
            >
              A web-based registration and information system for the 2021 PKN
              STAN Graduation Ceremony.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="sys-web-siwi2020"
              title="Sistem Informasi Wisudawan 2020 Admin"
              thumbnail={pic20siwi2001}
            >
              An admin portal for managing graduation registration and
              information for the 2020 PKN STAN Graduation Ceremony.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-mbmpknstan"
              title="Official Web of Masjid Baitul Maal PKN STAN"
              thumbnail={pic20mbm01}
            >
              The official website providing event and activity information for
              PKN STAN&apos;s Islamic organization, Masjid Baitul Maal.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ofc-web-prpn2020"
              title="Pekan Raya Perpajakan Nasional 2020"
              thumbnail={pic20prpn01}
            >
              The official event website for PUSPA PKN STAN’s taxation fair,
              featuring event details and registration.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
