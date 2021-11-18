import {
  Box,
  Container,
  Text,
  Divider,
  Heading,
  SimpleGrid,
} from "@chakra-ui/layout";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export const Comments: React.FC = () => {
  return (
    <Box
      maxW="6xl"
      mt={{ base: 12, xl: 24 }}
      display="grid"
      placeItems="center"
    >
      <Heading mb={{ xl: 5 }}>Opinie klientów</Heading>
      <SimpleGrid spacing={6} columns={{ base: 1, xl: 3 }}>
        <Container
          boxShadow={{ xl: "rgba(17, 12, 46, 0.07) 0px 48px 100px 0px" }}
          p={7}
          mt={5}
          textAlign="center"
          centerContent
          borderRadius="xl"
        >
          <Text fontWeight="bold" fontSize="xl">
            Czarny
          </Text>
          <Text fontSize="sm" mt={3}>
            Zakup pakietu na 100 bitew 3000 wn8 to był strzał w dziesiątkę
            niespełna 2 dni i fioletowe statystyki które pozwoliły mi dołączyć
            do lepszego klanu, jeszcze nie raz skorzystam z pomocy cloudtank
          </Text>
          <Box mt={5} display="flex" alignItems="center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <Text ml={2} fontSize="sm" color="gray.500">
              03.03.2021
            </Text>
          </Box>
        </Container>

        <Divider display={{ xl: "none" }} borderColor="gray.300" />

        <Container
          boxShadow={{ xl: "rgba(17, 12, 46, 0.07) 0px 48px 100px 0px" }}
          p={7}
          mt={5}
          textAlign="center"
          centerContent
          borderRadius="xl"
        >
          <Text fontWeight="bold" fontSize="xl">
            Mariusz
          </Text>
          <Text fontSize="sm" mt={3}>
            Pierwszy raz korzystałem z tego typu usług ,były lekkie obawy ale
            okazały się one zupełnie bezpodstawne misje na t55a zostały
            wykonane, bardzo polecam korzystanie z tej strony.
          </Text>
          <Box mt={5} display="flex" alignItems="center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar color="#CBD5E0" />
            <Text ml={2} fontSize="sm" color="gray.500">
              10.06.2021
            </Text>
          </Box>
        </Container>

        <Divider display={{ xl: "none" }} borderColor="gray.300" />

        <Container
          boxShadow={{ xl: "rgba(17, 12, 46, 0.07) 0px 48px 100px 0px" }}
          p={7}
          mt={5}
          textAlign="center"
          centerContent
          borderRadius="xl"
        >
          <Text fontWeight="bold" fontSize="xl">
            Sławek
          </Text>
          <Text fontSize="sm" mt={3}>
            Świetna Robota, Bardzo szybki czas realizacji teraz pozostało mi
            tylko pograć wymarzonym obiektem 279.
          </Text>
          <Box mt={5} display="flex" alignItems="center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <Text ml={2} fontSize="sm" color="gray.500">
              25.12.2020
            </Text>
          </Box>
        </Container>
      </SimpleGrid>
    </Box>
  );
};
