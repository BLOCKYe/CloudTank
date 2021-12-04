import { Box, Container, Divider, Heading, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import { Feedback } from "../../types";
import { CommentIteam } from "./CommentIteam";
import { useInView } from "react-intersection-observer";
import { SlideFade } from "@chakra-ui/transition";

interface Props {
  data: Feedback[];
}

export const Comments: React.FC<Props> = (props) => {
  const [comRef, comInView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });

  return (
    <Box maxW="6xl" mt={{ base: 12, xl: 24 }} display="grid" placeItems="center">
      <SlideFade in={comInView} offsetY="30px" style={{ width: "100%", transition: ".5s" }}>
        <Container ref={comRef} maxW="6xl" centerContent>
          <Heading mb={{ xl: 5 }}>Opinie klientów</Heading>
          <SimpleGrid spacing={6} columns={{ base: 1, xl: 3 }}>
            {props.data.map((item, index) => (
              <Box display="grid" key={item.id}>
                <CommentIteam name={item.name} content={item.content} date={item.date} rating={item.rating} />
                {props.data.length !== index + 1 && <Divider display={{ xl: "none" }} borderColor="gray.300" />}
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </SlideFade>
    </Box>
  );
};
