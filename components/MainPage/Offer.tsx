import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { OfferItem } from "./OfferItem";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

export const Offer: React.FC = () => {
  const Offers = [
    {
      title: "Obiekt 279e",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z drugiego frontu na czołg Ob. 279e",
      component: "/Obiekt279e",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/279.jpg?alt=media&token=c7a45d7c-e869-4a1e-b695-e3dc4c3499b6",
    },
    {
      title: "Obiekt 260",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z pierwszego frontu na czołg Ob. 260",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/260.jpg?alt=media&token=7fa2a459-16c0-44db-8156-e2677a7f2691",
    },
    {
      title: "Biegłość",
      label: "Odznaki biegłości",
      color: "yellow",
      desc: "Podnoszenie procentów biegłości, usługa obejmuje wbijanie nawet III odznaki",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/3moe.jpg?alt=media&token=52e58608-afc7-467c-a988-3aa4f803f8db",
    },
    {
      title: "T55A",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z pierwszego frontu na niemiecki czołg T55A",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/t55.jpg?alt=media&token=2f6319a5-ec6a-4184-8d32-463910a208a7",
    },
    {
      title: "T28 Concept",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z pierwszego frontu na czołg T28 Concept",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/t28.jpg?alt=media&token=91c923ba-4a05-4101-84d5-ece7185106d4",
    },
    {
      title: "Stug IV",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z pierwszego frontu na niemiecki czołg Stug IV",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/stug.jpg?alt=media&token=c3b36328-979b-463b-af5c-3e4efe576c21",
    },
    {
      title: "Chimera",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z drugiego frontu na czołg Chimera",
      component: "/Chimera",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/chimera.jpg?alt=media&token=643dbdae-b53c-4207-9cc4-a0f574289747",
    },
    {
      title: "Excalibur",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z drugiego frontu na czołg Excalibur",
      component: "/Excalibur",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/excalibur.jpg?alt=media&token=2406c751-ad89-4d97-9240-31cfcd979b64",
    },
  ];
  return (
    <Box maxW="6xl" mt={12} w="100%" display="grid" placeItems="center">
      <Heading>Nasza oferta</Heading>
      <Text mb={{ md: 7 }} color="gray.600" mt={3} textAlign="center">
        Wybierz interesującą Cię ofertę i wypełnij formularz
      </Text>
      <Box
        w="100%"
        p={0}
        display="grid"
        placeItems="center"
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr",
        }}
      >
        <OfferItem
          title={Offers[0].title}
          label={Offers[0].label}
          image={Offers[0].image}
          color={Offers[0].color}
          desc={Offers[0].desc}
          component={Offers[0].component}
        />
        <OfferItem
          title={Offers[1].title}
          label={Offers[1].label}
          image={Offers[1].image}
          desc={Offers[1].desc}
          color={Offers[1].color}
        />
        <OfferItem
          title={Offers[2].title}
          label={Offers[2].label}
          image={Offers[2].image}
          desc={Offers[2].desc}
          color={Offers[2].color}
        />
      </Box>

      <Tabs mt={24} isFitted variant="enclosed" w="100%">
        <TabList borderColor="gray.400" mb="1em">
          <Tab
            _selected={{
              borderColor: "gray.400",
              borderBottomColor: "gray.100",
              opacity: "1",
            }}
            opacity=".3"
            fontWeight="bold"
            _focus={{ outline: "none" }}
          >
            Pierwszy front
          </Tab>
          <Tab
            _selected={{
              borderColor: "gray.400",
              borderBottomColor: "gray.100",
              opacity: "1",
            }}
            opacity=".3"
            fontWeight="bold"
            _focus={{ outline: "none" }}
          >
            Drugi front
          </Tab>
          <Tab
            _selected={{
              borderColor: "gray.400",
              borderBottomColor: "gray.100",
              opacity: "1",
            }}
            opacity=".3"
            fontWeight="bold"
            _focus={{ outline: "none" }}
          >
            Inne usługi
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel display="grid" placeItems="center">
            <Box maxW="4xl" textAlign="center">
              Kampania pierwszy front składa się z czterech operacji, z których
              każda zawiera gałęzie misji dla wszystkich typów pojazdów. Każda
              gałąź kampanii pierwszy front składa się z 15 misji. Oferta
              dotyczy wybranych w formularzu misji. Czas wykonania usługi
              zależny jest od ilości oraz trudności wybranych misji.
            </Box>
            <Box
              w="100%"
              p={0}
              mt={5}
              display="grid"
              placeItems="center"
              gridTemplateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                xl: "1fr 1fr 1fr 1fr",
              }}
            >
              <OfferItem
                title={Offers[1].title}
                label={Offers[1].label}
                image={Offers[1].image}
                desc={Offers[1].desc}
                color={Offers[1].color}
              />
              <OfferItem
                title={Offers[3].title}
                label={Offers[3].label}
                image={Offers[3].image}
                desc={Offers[3].desc}
                color={Offers[3].color}
              />
              <OfferItem
                title={Offers[4].title}
                label={Offers[4].label}
                image={Offers[4].image}
                desc={Offers[4].desc}
                color={Offers[4].color}
              />
              <OfferItem
                title={Offers[5].title}
                label={Offers[5].label}
                image={Offers[5].image}
                desc={Offers[5].desc}
                color={Offers[5].color}
              />
            </Box>
          </TabPanel>

          <TabPanel display="grid" placeItems="center">
            <Box maxW="4xl" textAlign="center">
              Kampania Drugi front składa się z trzech operacji, z których każda
              zawiera gałęzie misji dla pojazdów z formacji narodowych. Każda
              gałąź kampanii Drugi front składa się z 15 misji. Oferta dotyczy
              wybranych w formularzu misji. Czas wykonania usługi zależny jest
              od ilości oraz trudności wybranych misji.
            </Box>
            <Box
              w="100%"
              p={0}
              mt={5}
              display="grid"
              placeItems="center"
              gridTemplateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                xl: "1fr 1fr 1fr",
              }}
            >
              <OfferItem
                title={Offers[0].title}
                label={Offers[0].label}
                image={Offers[0].image}
                desc={Offers[0].desc}
                color={Offers[0].color}
                component={Offers[0].component}
              />
              <OfferItem
                title={Offers[6].title}
                label={Offers[6].label}
                image={Offers[6].image}
                desc={Offers[6].desc}
                color={Offers[6].color}
                component={Offers[6].component}
              />
              <OfferItem
                title={Offers[7].title}
                label={Offers[7].label}
                image={Offers[7].image}
                desc={Offers[7].desc}
                color={Offers[7].color}
                component={Offers[7].component}
              />
            </Box>
          </TabPanel>

          <TabPanel display="grid" placeItems="center">
            <Box maxW="4xl" textAlign="center">
              Zajmujemy się również realizacją różnego rodzaju zleceń,
              specjalizujemy się w wbijaniu odznak biegłości, podnoszeniu
              statystyk WN8 oraz szybkim badaniu czołgów.
            </Box>
            <Box
              w="100%"
              p={0}
              mt={5}
              display="grid"
              placeItems="center"
              gridTemplateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                xl: "1fr 1fr 1fr 1fr",
              }}
            >
              <OfferItem
                title={Offers[2].title}
                label={Offers[2].label}
                image={Offers[2].image}
                desc={Offers[2].desc}
                color={Offers[2].color}
              />
              <OfferItem
                title={Offers[2].title}
                label={Offers[2].label}
                image={Offers[2].image}
                desc={Offers[2].desc}
                color={Offers[2].color}
              />
              <OfferItem
                title={Offers[2].title}
                label={Offers[2].label}
                image={Offers[2].image}
                desc={Offers[2].desc}
                color={Offers[2].color}
              />
              <OfferItem
                title={Offers[2].title}
                label={Offers[2].label}
                image={Offers[2].image}
                desc={Offers[2].desc}
                color={Offers[2].color}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
