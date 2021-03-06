import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { OfferItem } from "./OfferItem";
import { Tabs, TabList, Tab, TabPanels, TabPanel, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

export const Offer: React.FC = () => {
  const [tabsRef, tabsInView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });

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
      component: "/Obiekt260",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/260.jpg?alt=media&token=7fa2a459-16c0-44db-8156-e2677a7f2691",
    },
    {
      title: "Biegłość",
      label: "Odznaki biegłości",
      color: "green",
      desc: "Zdobywanie odznak biegłości, podnoszenie % biegłości.",
      component: "/Moe",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/3moe.jpg?alt=media&token=52e58608-afc7-467c-a988-3aa4f803f8db",
    },
    {
      title: "T55A",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z pierwszego frontu na niemiecki czołg T55A",
      component: "/T55A",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/t55.jpg?alt=media&token=2f6319a5-ec6a-4184-8d32-463910a208a7",
    },
    {
      title: "T28 Concept",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z pierwszego frontu na czołg T28 Concept",
      component: "/T28Concept",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/t28.jpg?alt=media&token=91c923ba-4a05-4101-84d5-ece7185106d4",
    },
    {
      title: "Stug IV",
      label: "Misje osobiste",
      color: "blue",
      desc: "Realizowanie misji osobistych z pierwszego frontu na niemiecki czołg Stug IV",
      component: "/StugIV",
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
    {
      title: "WN8",
      label: "BOOSTING",
      color: "red",
      desc: "Podnoszenie statystyk WN8, oceny osobistej oraz średnich uszkodzeń.",
      component: "/WN8",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/wn8.jpg?alt=media&token=cf6c4d3b-56bf-45e7-a649-fe89e51f74cb",
    },
    {
      title: "Czołg z kampanii",
      label: "Kampania",
      color: "yellow",
      desc: "Zdobycie czołgu z nadchodzacej kampanii.",
      component: "/Kampania",
      image: "/Chief.jpg",
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
          component={Offers[1].component}
        />
        <OfferItem
          title={Offers[2].title}
          label={Offers[2].label}
          image={Offers[2].image}
          desc={Offers[2].desc}
          color={Offers[2].color}
          component={Offers[2].component}
        />
      </Box>

      <SlideFade in={tabsInView} offsetY="30px" style={{ width: "100%", transition: ".5s" }} >
        <Tabs ref={tabsRef} transition="1s" mt={24} isFitted variant="enclosed" w="100%">
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
              fontSize={{ base: "sm", md: "xl" }}
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
              fontSize={{ base: "sm", md: "xl" }}
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
              fontSize={{ base: "sm", md: "xl" }}
            >
              Inne usługi
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel display="grid" placeItems="center">
              <Box maxW="4xl" textAlign="center">
                Kampania pierwszy front składa się z czterech operacji, z których każda zawiera gałęzie misji dla
                wszystkich typów pojazdów. Każda gałąź kampanii pierwszy front składa się z 15 misji. Oferta dotyczy
                wybranych w formularzu misji. Czas wykonania usługi zależny jest od ilości oraz trudności wybranych
                misji.
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
                  component={Offers[1].component}
                />
                <OfferItem
                  title={Offers[3].title}
                  label={Offers[3].label}
                  image={Offers[3].image}
                  desc={Offers[3].desc}
                  color={Offers[3].color}
                  component={Offers[3].component}
                />
                <OfferItem
                  title={Offers[4].title}
                  label={Offers[4].label}
                  image={Offers[4].image}
                  desc={Offers[4].desc}
                  color={Offers[4].color}
                  component={Offers[4].component}
                />
                <OfferItem
                  title={Offers[5].title}
                  label={Offers[5].label}
                  image={Offers[5].image}
                  desc={Offers[5].desc}
                  color={Offers[5].color}
                  component={Offers[5].component}
                />
              </Box>
            </TabPanel>

            <TabPanel display="grid" placeItems="center">
              <Box maxW="4xl" textAlign="center">
                Kampania Drugi front składa się z trzech operacji, z których każda zawiera gałęzie misji dla pojazdów z
                formacji narodowych. Każda gałąź kampanii Drugi front składa się z 15 misji. Oferta dotyczy wybranych w
                formularzu misji. Czas wykonania usługi zależny jest od ilości oraz trudności wybranych misji.
              </Box>
              <Box
                w="100%"
                p={0}
                maxW="4xl"
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
                Zajmujemy się również realizacją różnego rodzaju zleceń, specjalizujemy się w wbijaniu odznak biegłości,
                podnoszeniu statystyk WN8 oraz szybkim badaniu czołgów.
              </Box>
              <Box
                w="100%"
                p={0}
                mt={5}
                display="grid"
                placeItems="center"
                maxW="4xl"
                gridTemplateColumns={{
                  base: "1fr",
                  md: "1fr 1fr",
                  xl: "1fr 1fr 1fr",
                }}
              >
                <OfferItem
                  title={Offers[2].title}
                  label={Offers[2].label}
                  image={Offers[2].image}
                  desc={Offers[2].desc}
                  color={Offers[2].color}
                  component={Offers[2].component}
                />
                <OfferItem
                  title={Offers[8].title}
                  label={Offers[8].label}
                  image={Offers[8].image}
                  desc={Offers[8].desc}
                  color={Offers[8].color}
                  component={Offers[8].component}
                />
                <OfferItem
                    title={Offers[9].title}
                    label={Offers[9].label}
                    image={Offers[9].image}
                    desc={Offers[9].desc}
                    color={Offers[9].color}
                    component={Offers[9].component}
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </SlideFade>
    </Box>
  );
};
