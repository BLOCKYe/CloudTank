import { Container, Box, Text } from "@chakra-ui/layout";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Feedback } from "../../types";

export const CommentIteam: React.FC<Feedback> = (props) => {
  return (
    <Container
      boxShadow={{ xl: "rgba(17, 12, 46, 0.07) 0px 48px 100px 0px" }}
      p={7}
      mt={5}
      textAlign="center"
      centerContent
      borderRadius="xl"
    >
      <Text fontWeight="bold" fontSize="xl">
        {props.name}
      </Text>
      <Text fontSize="sm" mt={3}>
        {props.content}
      </Text>
      <Box mt={5} display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <AiFillStar
              key={props.content + i}
              color={i < props.rating ? "gray.500" : "#CBD5E0"}
            />
          ))}
        <Text ml={2} fontSize="sm" color="gray.500">
          {props.date}
        </Text>
      </Box>
    </Container>
  );
};
