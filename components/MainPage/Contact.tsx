import { Container, Heading, Link } from "@chakra-ui/layout";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { SlideFade } from "@chakra-ui/transition";

export const Contact: React.FC = () => {
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });
      return (
      <SlideFade in={contactInView} offsetY="30px" style={{ width: "100%", transition: ".5s" }}>
      <Container
      ref={contactRef}
      fontSize="xl"
      mt={{ base: 24, md: 48 }}
      mb={{ md: 12 }}
      centerContent
      textAlign="center"
    >
        <Heading mb={1}> Masz więcej pytań? </Heading>
        Skontaktuj się z nami za pomocą maila
        <Link href="mailto:kontakt@cloudtank.pl">
          <Button
            leftIcon={<FaPaperPlane />}
            mt={5}
            colorScheme="purple"
            variant="outline"
            _focus={{ outline: "none" }}
          >
            Napisz maila
          </Button>
        </Link>
    </Container>
    </SlideFade>
  );
};
