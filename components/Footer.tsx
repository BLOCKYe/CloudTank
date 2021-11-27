import { Container, Text } from "@chakra-ui/layout";
import React from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { Button, ButtonGroup } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Container mt={{ base: 12, xl: 24 }} centerContent>
      <ButtonGroup>
        <Button
          _focus={{ outline: "none" }}
          variant="outline"
          leftIcon={<ImFacebook />}
          borderColor="gray.300"
        >
          Facebook
        </Button>
        <Button
          _focus={{ outline: "none" }}
          variant="outline"
          leftIcon={<ImTwitter />}
          borderColor="gray.300"
        >
          Twitter
        </Button>
      </ButtonGroup>
      <Text mt={5} mb={5} textAlign="center" fontSize=".8rem">
        Copyright © CloudTank 2021
      </Text>
    </Container>
  );
};
