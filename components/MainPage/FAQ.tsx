import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  SimpleGrid,
} from "@chakra-ui/layout";
import React from "react";

export const FAQ: React.FC = () => {
  return (
    <Box maxW="6xl" display="grid" placeItems="center" mt={{ base: 12, xl: 24 }} centerContent>
      <SimpleGrid placeItems="center" columns={{ base: 1, xl: 2 }} spacing={10}>
        <Container textAlign="center" mt={5} centerContent>
          <Text fontSize="xl" fontWeight="bold">
            Jak to dokładnie działa?
          </Text>
          <Text fontSize="sm" mt={3}>
            Wszystko działa bardzo intuicyjnie, klient wybiera interesującą go
            ofertę. W kolejnym kroku wypełnia formularz pozwalający określić
            warunki umowy. W ciągu następnych 24h otrzymuje dokładną ofertę.
          </Text>
        </Container>
        <Divider borderColor="gray.300" display={{ base: "block", xl: "none" }}/>
        <Container textAlign="center" mt={5} centerContent>
          <Text fontSize="xl" fontWeight="bold">
            Dlaczego warto zainteresować się właśnie ofertą CloudTank?
          </Text>
          <Text fontSize="sm" mt={3}>
            Od konkurencji odróżnia nas profesjonalizm, zapewniamy wysoce
            jakościowe usługi, oferujemy gwarancję bezpieczeństwa i
            dyskretności. Przez ponad 4 lata działalności mamy za sobą rzeszę
            zadowolonych klientów, wyróżnia nas wysoka skuteczność oraz jakość.
          </Text>
        </Container>
        <Divider borderColor="gray.300" /> <Divider borderColor="gray.300" display={{ base: "none", xl: "block" }} />
        <Container textAlign="center" mt={5} centerContent>
          <Text fontSize="xl" fontWeight="bold">
            Jaka jest gwarancja bezpieczeństwa zrealizowania usługi?
          </Text>
          <Text fontSize="sm" mt={3}>
            Jesteśmy grupą ludzi która działa już w boosting service od 2016
            roku, mamy masę zadolowonych klientów oraz skuteczność wykonywania
            misji na poziomie 99%.
          </Text>
        </Container>
        <Divider borderColor="gray.300" display={{ base: "block", xl: "none" }}/>
        <Container textAlign="center" mt={5} centerContent>
          <Text fontSize="xl" fontWeight="bold">
            Co potrzebujemy do realizacji usługi?
          </Text>
          <Text fontSize="sm" mt={3}>
            Do realizacji Pańskich usług potrzebujemy pańskich danych do konta.
          </Text>
        </Container>
        <Divider borderColor="gray.300" /> <Divider borderColor="gray.300" display={{ base: "none", xl: "block" }}/>
        <Container textAlign="center" mt={5} centerContent>
          <Text fontSize="xl" fontWeight="bold">
            Czy w razie niepowodzenia istnieje możliwość zwrotu pieniędzy?
          </Text>
          <Text fontSize="sm" mt={3}>
            Oczywiście, istnieje możliwość zwrotu pieniędzy jeśli z przyczyn
            niezależnych od nas usługa nie zostanie wykonana.
          </Text>
        </Container>
        <Divider borderColor="gray.300" display={{ base: "block", xl: "none" }}/>
        <Container textAlign="center" mt={5} centerContent>
          <Text fontSize="xl" fontWeight="bold">
            Jaka jest gwarancja bezpieczeństwa zrealizowania usługi?
          </Text>
          <Text fontSize="sm" mt={3}>
            Jesteśmy grupą ludzi która działa już w boosting service od 2016
            roku, mamy masę zadolowonych klientów oraz skuteczność wykonywania
            misji na poziomie 99%.
          </Text>
        </Container>
      </SimpleGrid>
    </Box>
  );
};
