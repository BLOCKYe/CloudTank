import { Tab } from "@chakra-ui/tabs";
import React from "react";

interface Props {
  value: string;
}

export const NationTabList: React.FC<Props> = (props) => {
  return (
    <Tab
      _selected={{
        borderColor: "gray.400",
        borderBottomColor: "gray.100",
        opacity: "1",
      }}
      opacity=".3"
      fontWeight="bold"
      _focus={{ outline: "none" }}
      fontSize={{ base: ".7rem", md: "1rem" }}
    >
      {props.value}
    </Tab>
  );
};
