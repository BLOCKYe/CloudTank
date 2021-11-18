import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Props {
  isDescription?: boolean;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <Box
      display="grid"
      placeItems={{ base: "center", xl: "unset" }}
      mt={12}
      centerContent
    >
      <Heading>CloudTank</Heading>
      <Text color="gray.600">World of tanks boosting</Text>
      {props.isDescription && (
        <Container
          p={0}
          display="grid"
          placeItems={{ base: "center", xl: "start" }}
        >
          <Text textAlign={{ base: "center", xl: "start" }} mt={5}>
            Jesteśmy grupą{" "}
            <b style={{ backgroundColor: "#FAF5FF", color: "#805AD5" }}>
              profesjonalnych
            </b>{" "}
            graczy World Of Tanks. Od niemal 5 lat zajmujemy się rozwijaniem
            kont w grze. Nasz{" "}
            <b style={{ backgroundColor: "#FAF5FF", color: "#805AD5" }}>
              staż gry
            </b>{" "}
            sięga blisko 9 lat, każdy członek naszego zespołu czerpał
            doświadczenie z topowych europejskich klanów.
          </Text>

          <Button
            rightIcon={<FaLongArrowAltRight />}
            mt={5}
            colorScheme="purple"
            variant="outline"
            _focus={{ outline: "none" }}
          >
            Poznaj ofertę
          </Button>
        </Container>
      )}
    </Box>
  );
};
