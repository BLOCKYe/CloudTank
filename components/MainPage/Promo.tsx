import { Container, Heading, Badge, Text, Link } from "@chakra-ui/layout";
import React from "react";
import { Promotion } from "../../types";

interface Props {
  promo: Promotion;
}

export const Promo: React.FC<Props> = (props) => {
  return (
    <Link _focus={{ outline: "none" }} target="_blank" style={{ textDecoration: "none" }} href={props.promo.link}>
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
        <Heading textAlign="center">{props.promo.title}</Heading>
        <Text textAlign={{ base: "center", xl: "start" }} mt={3}>
          {props.promo.description}
        </Text>
        <Badge mt={5} pr={2} pl={2} colorScheme={props.promo.color} fontSize=".7rem">
          {props.promo.label}
        </Badge>
      </Container>
    </Link>
  );
};
