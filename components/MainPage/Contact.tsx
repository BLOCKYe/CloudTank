import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

export const Contact: React.FC = () => {
  return (
    <Container
      fontSize="xl"
      mt={{ base: 12, md: 48 }}
      mb={{ md: 12 }}
      centerContent
      textAlign="center"
    >
      <Heading mb={1}> Masz więcej pytań? </Heading>
      Skontaktuj się z nami za pomocą maila
      <Button
        leftIcon={<FaPaperPlane />}
        mt={5}
        colorScheme="purple"
        variant="outline"
        _focus={{ outline: "none" }}
      >
        Napisz maila
      </Button>
    </Container>
  );
};
