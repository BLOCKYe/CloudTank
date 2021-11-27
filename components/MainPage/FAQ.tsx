import { Box, Container, Text, Divider, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import { FAQs } from "../../types";
import { FAQIteam } from "../FAQIteam";

interface Props {
  data: FAQs[];
}

export const FAQ: React.FC<Props> = (props) => {
  return (
    <Box
      maxW="6xl"
      display="grid"
      placeItems="center"
      mt={{ base: 12, xl: 24 }}
    >
      <SimpleGrid placeItems="center" columns={{ base: 1, xl: 2 }} spacing={14}>
        {props.data.map((element, index) => (<Box>
          <FAQIteam items={props.data.length} index={index} key={element.id} title={element.title} content={element.content} /></Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
