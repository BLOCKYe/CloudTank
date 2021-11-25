import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  SimpleGrid,
  Badge,
} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import { Comments } from "../components/MainPage/Comments";
import { Contact } from "../components/MainPage/Contact";
import { FAQ } from "../components/MainPage/FAQ";
import { Footer } from "../components/Footer";
import { Header } from "../components/MainPage/Header";
import { Offer } from "../components/MainPage/Offer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>CloudTank</title>
        <meta name="description" content="World of tanks boosting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Box
        p={5}
        w="100%"
        h="100%"
        color="gray.800"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="gray.100"
      >
        <SimpleGrid
          mt={{ base: 12, xl: "20vh" }}
          spacing={24}
          maxW="6xl"
          placeItems="center"
          columns={{ base: 1, xl: 2 }}
        >
          <Header isDescription={true} />

          <Container
            display="grid"
            placeItems={{ base: "center", xl: "start" }}
            mt={{ base: 0, xl: 12 }}
            p={12}
            boxShadow="rgba(17, 12, 46, 0.07) 0px 48px 100px 0px;"
            borderRadius="xl"
            transition=".3s ease"
            _hover={{
              transform: "translateY(-10px)",
              cursor: "pointer",
              boxShadow: "rgba(17, 12, 46, 0.12) 0px 48px 100px 0px",
            }}
          >
            <Heading textAlign="center">PROMOCJA</Heading>
            <Text textAlign={{ base: "center", xl: "start" }} mt={3}>
              Polecamy zniżkową ofertę na bitwy rankingowe. <br /> Oferta
              dotyczy zdobycia zlotej ligi.
            </Text>
            <Badge mt={5} pr={2} pl={2} colorScheme="purple" fontSize=".7rem">
              Bitwy rankingowe
            </Badge>
          </Container>
        </SimpleGrid>

        <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.100" />
        <Offer />
        <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
        <FAQ />
        <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
        <Contact />
        <Divider mt={{ base: 12, md: 24 }} borderColor="gray.300" />
        <Comments />
        <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;