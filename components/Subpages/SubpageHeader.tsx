import React from "react";
import { Text, Badge, Container, SimpleGrid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

interface Props {
  title: string;
  desc: string;
  label: string;
  color: string;
  image: string;
  req: string;
}

export const SubpageHeader: React.FC<Props> = (props) => {
  return (
    <SimpleGrid
      placeItems="center"
      maxW="6xl"
      mt={{ base: 24, xl: "10vh" }}
      columns={{ base: 1, md: 2 }}
    >
      <Container centerContent>
        <Image maxW="300px" borderRadius="xl" src={`https://cloud-tank-server.herokuapp.com${props.image}`} />
        <Text fontSize="xl" mt={5}>
          {props.title}
        </Text>
      </Container>

      <Container
        mt={{ base: 5, md: 0 }}
        maxW="sm"
        textAlign={{ base: "center", md: "start" }}
      >
        <Badge mb={5} colorScheme={props.color}>
          {props.label}
        </Badge>
        <Text fontWeight="bold">{props.desc}</Text>
        <Text mt={5}>{props.req}</Text>
      </Container>
    </SimpleGrid>
  );
};
