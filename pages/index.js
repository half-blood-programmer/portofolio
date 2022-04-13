import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  Icon,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
// import { GridItem } from "../components/grid-item";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoMail,
} from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          align="center"
          mb={6}
        >
          Hello I&apos;m
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Adam Junio Selva
            </Heading>
            <p>Digital Craftzman (Artist/blah/blah)</p>
          </Box>
          <Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="1080px"
                display="inline-box"
                borderRadius="full"
                src="/images/adam.jpg"
                alt="Profile Picture"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            This Pargrap is so long
            <NextLink href="/works/inkdrop">
              <Link> Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portofolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear> Born
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear> Blah
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            What I Love
          </Heading>
          <Paragraph>
            Blah, Blah,{" "}
            <NextLink href="/works/inkdrop">
              <Link>Blah</Link>
            </NextLink>
            .
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Where you can find me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/adamjunios" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/adamjunios" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  Twitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/adamjunios" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/adamjunios" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  adamjunioselvaa@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
          {/* <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem>

            </GridItem>
          </SimpleGrid> */}
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
