import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { NationTab } from "./NationTab";
import { NationTabList } from "./NationTabList";

export interface Nation {
  heavy: string[];
  light: string[];
  medium: string[];
  arty: string[];
}

export interface NationMissionsList {
  name: string;
  price: number;
}

interface Props {
  requiredTanks: {
    Unia: Nation;
    Blok: Nation;
    Koalicja: Nation;
    Alianci: Nation;
  };
  missions: {
    Unia: NationMissionsList[];
    Blok: NationMissionsList[];
    Koalicja: NationMissionsList[];
    Alianci: NationMissionsList[];
  };
}

export const FormMissions: React.FC<Props> = (props) => {
  const [price, setPrice] = useState(0);
  const [email, setEmail] = useState<string>("");
  const [nick, setNick] = useState("");
  const [message, setMessage] = useState("");
  const [selectedMissions, setSelectedMissions] = useState<string[]>([]);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const submitForm = () => {
    const messageContent = {
      email: email,
      nickname: nick,
      message: message,
      missions: selectedMissions,
      price: price,
    };

    setEmail("");
    setNick("");
    setMessage("");

    console.log(messageContent);
  };

  return (
    <Box display="grid" placeItems="center" maxW="6xl" w="100%" mt={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <FormControl maxW="sm" id="first-name" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            onChange={handleEmail}
            borderColor="gray.300"
            type="email"
            placeholder="Twój email"
          />
        </FormControl>

        <FormControl
          mt={{ base: 5, md: 0 }}
          maxW="sm"
          id="first-name"
          isRequired
        >
          <FormLabel>Nick</FormLabel>
          <Input
            value={nick}
            onChange={handleNick}
            borderColor="gray.300"
            type="email"
            placeholder="Twój nick z gry"
          />
        </FormControl>
      </SimpleGrid>

      <Tabs mt={{ base: 12, md: 24 }} isFitted variant="enclosed" maxW="2xl">
        <TabList borderColor="gray.400" mb={12}>
          <NationTabList value="Unia" />
          <NationTabList value="Blok" />
          <NationTabList value="Alianci" />
          <NationTabList value="Koalicja" />
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <NationTab
              required={props.requiredTanks.Unia}
              missions={props.missions.Unia}
              price={price}
              setPrice={setPrice}
              selectedMissions={selectedMissions}
              setSelectedMissions={setSelectedMissions}
            />
          </TabPanel>

          <TabPanel p={0}>
            <NationTab
              required={props.requiredTanks.Blok}
              missions={props.missions.Blok}
              price={price}
              setPrice={setPrice}
              selectedMissions={selectedMissions}
              setSelectedMissions={setSelectedMissions}
            />
          </TabPanel>

          <TabPanel p={0}>
            <NationTab
              required={props.requiredTanks.Alianci}
              missions={props.missions.Alianci}
              price={price}
              setPrice={setPrice}
              selectedMissions={selectedMissions}
              setSelectedMissions={setSelectedMissions}
            />
          </TabPanel>

          <TabPanel p={0}>
            <NationTab
              required={props.requiredTanks.Koalicja}
              missions={props.missions.Koalicja}
              price={price}
              setPrice={setPrice}
              selectedMissions={selectedMissions}
              setSelectedMissions={setSelectedMissions}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Textarea
        mt={12}
        placeholder="Wprowadź opcjonalną wiadomość..."
        maxW="xl"
        resize="vertical"
        variant="outline"
        borderColor="gray.300"
        value={message}
        onChange={handleMessage}
      />

      <Box
        backgroundColor="gray.200"
        p={5}
        pr={7}
        pl={7}
        borderRadius="xl"
        fontSize="xl"
        mt={12}
      >
        Szacowana cena: <b style={{ color: "#805AD5" }}>{price}</b> PLN
      </Box>

      <Button
        leftIcon={<FaPaperPlane />}
        mt={12}
        colorScheme="purple"
        variant="outline"
        _focus={{ outline: "none" }}
        onClick={submitForm}
      >
        Wyślij!
      </Button>
    </Box>
  );
};
