import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SubpageHeader } from "../components/Subpages/SubpageHeader";
import { FormMissions } from "../components/Subpages/FormMissions";

export const Obiekt279e: React.FC = () => {
  const data = {
    title: "Obiekt 279e",
    desc: "Osługa obejmuje realizacje wybranych misji osobistych drugiego frontu kampanii na czołg Obiekt 279e.",
    label: "Misje osobiste",
    color: "blue",
    req: "Aby skutecznie wykonać usługę wymagamy 100 golda (na przełożenie modułów). Aktywnego konta premium oraz kilku z niżej wymienionych czołgów.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/279.jpg?alt=media&token=c7a45d7c-e869-4a1e-b695-e3dc4c3499b6",
  };

  const requiredTanks = {
    Unia: {
      light: ["T100 LT", "LT432u", "LTTB"],
      heavy: ["IS4", "IS-7", "OB705", "WZ 111-5A", "ST-I", "T10"],
      medium: ["Ob 907", "Ob 140", "T54", "Ob 430"],
      arty: ["Arta przynajmniej VIII tieru"],
    },
    Blok: {
      light: ["Hwk 30", "RU-251"],
      heavy: ["E100", "Maus", "Tiger II"],
      medium: ["E50", "Leopard PTA", "Leopard 1", "Stb-1", "Panter II"],
      arty: ["Arta przynajmniej VIII tieru"],
    },
    Alianci: {
      light: ["Manticore"],
      heavy: ["Super Conqueror", "Conqueror", "M103", "T110E5"],
      medium: ["M48 Patton", "M46 Patton"],
      arty: ["Arta przynajmniej VIII tieru"],
    },
    Koalicja: {
      light: ["EBR 105"],
      heavy: ["Kranvagn"],
      medium: ["Bat-chat 25t", "Progetto 46", "Progetto 65"],
      arty: [],
    },
  };

  const missions = {
    Unia: [
      { name: "Unia-1", price: 40 },
      { name: "Unia-2", price: 40 },
      { name: "Unia-3", price: 40 },
      { name: "Unia-4", price: 100 },
      { name: "Unia-5", price: 50 },
      { name: "Unia-6", price: 50 },
      { name: "Unia-7", price: 50 },
      { name: "Unia-8", price: 45 },
      { name: "Unia-9", price: 45 },
      { name: "Unia-10", price: 50 },
      { name: "Unia-11", price: 45 },
      { name: "Unia-12", price: 45 },
      { name: "Unia-13", price: 140 },
      { name: "Unia-14", price: 70 },
      { name: "Unia-15", price: 150 },
    ],
    Blok: [
      { name: "Blok-1", price: 45 },
      { name: "Blok-2", price: 70 },
      { name: "Blok-3", price: 45 },
      { name: "Blok-4", price: 55 },
      { name: "Blok-5", price: 40 },
      { name: "Blok-6", price: 45 },
      { name: "Blok-7", price: 50 },
      { name: "Blok-8", price: 45 },
      { name: "Blok-9", price: 50 },
      { name: "Blok-10", price: 60 },
      { name: "Blok-11", price: 40 },
      { name: "Blok-12", price: 45 },
      { name: "Blok-13", price: 45 },
      { name: "Blok-14", price: 45 },
      { name: "Blok-15", price: 150 },
    ],
    Alianci: [
      { name: "Alianci-1", price: 40 },
      { name: "Alianci-2", price: 60 },
      { name: "Alianci-3", price: 60 },
      { name: "Alianci-4", price: 45 },
      { name: "Alianci-5", price: 45 },
      { name: "Alianci-6", price: 55 },
      { name: "Alianci-7", price: 50 },
      { name: "Alianci-8", price: 70 },
      { name: "Alianci-9", price: 120 },
      { name: "Alianci-10", price: 45 },
      { name: "Alianci-11", price: 60 },
      { name: "Alianci-12", price: 60 },
      { name: "Alianci-13", price: 90 },
      { name: "Alianci-14", price: 55 },
      { name: "Alianci-15", price: 150 },
    ],
    Koalicja: [
      { name: "Koalicja-1", price: 40 },
      { name: "Koalicja-2", price: 60 },
      { name: "Koalicja-3", price: 60 },
      { name: "Koalicja-4", price: 45 },
      { name: "Koalicja-5", price: 45 },
      { name: "Koalicja-6", price: 55 },
      { name: "Koalicja-7", price: 50 },
      { name: "Koalicja-8", price: 70 },
      { name: "Koalicja-9", price: 120 },
      { name: "Koalicja-10", price: 45 },
      { name: "Koalicja-11", price: 60 },
      { name: "Koalicja-12", price: 60 },
      { name: "Koalicja-13", price: 90 },
      { name: "Koalicja-14", price: 55 },
      { name: "Koalicja-15", price: 150 },
    ],
  };

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
        color={data.color}
        title={data.title}
        desc={data.desc}
        label={data.label}
        image={data.image}
        req={data.req}
      />
      <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
      <FormMissions requiredTanks={requiredTanks} missions={missions} />
      <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
      <Footer />
    </Box>
  );
};

export default Obiekt279e;
