import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SubpageHeader } from "../components/Subpages/SubpageHeader";
import { FormMissions } from "../components/Subpages/FormMissions";
import axios from "axios";

export async function getServerSideProps() {
  const response = await axios.get(
    `https://cloud-tank-server.herokuapp.com/object-279-s`
  );

  const data = await response.data[0];
  return { props: { data } };
}

export const Obiekt279e: React.FC<any> = ({ data }) => {
  return (
    <Box
      p={3}
      w="100%"
      h="100%"
      color="gray.800"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="gray.100"
    >
      <Navbar />
      <SubpageHeader
        color={data.header.color}
        title={data.header.title}
        desc={data.header.description}
        label={data.header.label}
        image={data.header.image.url}
        req={data.header.requirements}
      />
      <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
      <FormMissions
        requiredTanks={data.requiredTanks}
        missions={data.Missions}
      />
      <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
      <Footer />
    </Box>
  );
};

export default Obiekt279e;
