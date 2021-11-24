import { Box, Heading, Image, Badge, Text, Link } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  label: string;
  image: string;
  desc: string;
  color: string;
  component?: string;
}

export const OfferItem: React.FC<Props> = (props) => {
  return (
    <Link
      _focus={{ outline: "none" }}
      target="_blank"
      style={{ textDecoration: "none" }}
      href={props.component}
    >
      <Box
        borderRadius="xl"
        mt={5}
        m={{ md: 3 }}
        // borderWidth="1px"
        borderColor="gray.300"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="lg"
        transition=".3s ease"
        boxShadow="rgba(17, 12, 46, 0.1) 0px 48px 100px 0px;"
        _hover={{
          transform: "translateY(-10px)",
          cursor: "pointer",
          boxShadow: "rgba(17, 12, 46, 0.17) 0px 48px 100px 0px",
        }}
      >
        <Image w="100%" src={props.image} alt={props.title} />
        <Heading fontSize="2xl" mt={5}>
          {props.title}
        </Heading>
        <Text m={5} textAlign="center" color="gray.600" fontSize="sm">
          {props.desc}
        </Text>
        <Badge
          m={1}
          mb={7}
          pr={2}
          pl={2}
          colorScheme={props.color}
          fontSize=".7rem"
        >
          {props.label}
        </Badge>
      </Box>
    </Link>
  );
};
