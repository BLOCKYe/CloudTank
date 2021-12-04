import { Box, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import { FAQs } from "../../types";
import { FAQIteam } from "../FAQIteam";
import { useInView } from "react-intersection-observer";
import { SlideFade } from "@chakra-ui/transition";

interface Props {
  data: FAQs[];
}

export const FAQ: React.FC<Props> = (props) => {
  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });

  return (
    <Box ref={faqRef} maxW="6xl" display="grid" placeItems="center" mt={{ base: 12, xl: 24 }}>
      <SlideFade in={faqInView} offsetY="30px" style={{ width: "100%", transition: ".5s" }}>
        <SimpleGrid placeItems="center" columns={{ base: 1, xl: 2 }} spacing={14}>
          {props.data.map((element, index) => (
            <Box key={element.id}>
              <FAQIteam
                items={props.data.length}
                index={index}
                key={element.id}
                title={element.title}
                content={element.content}
              />
            </Box>
          ))}
        </SimpleGrid>
      </SlideFade>
    </Box>
  );
};
