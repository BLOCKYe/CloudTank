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
import axios from "axios";
import { Props } from "framer-motion/types/types";

export const FormMissions: React.FC<Props> = (props) => {
  const [price, setPrice] = useState(0);
  const [email, setEmail] = useState<string>("");
  const [nick, setNick] = useState("");
  const [message, setMessage] = useState("");
  const [selectedMissions, setSelectedMissions] = useState<string[]>([]);
  const [timer, setTimer] = useState<any>(null);
  const [isNickCorrect, setIsNickCorrect] = useState<boolean>(true);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1) setIsNickCorrect(false);
    setNick(e.target.value);
    clearTimeout(timer);
    setTimer(setTimeout(() => fetchNickname(e.target.value), 1000));
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const fetchNickname = async (nickname: string) => {
    const response = await axios.get(
      `https://api.worldoftanks.eu/wot/account/list/?application_id=ea5b62e33ac1babf3bc5c621d0dab391&search=${nickname}`
    );
    if (response?.data?.meta?.count === 0 || response?.data?.status !== "ok") {
      setIsNickCorrect(false);
    } else setIsNickCorrect(true);
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    if (isNickCorrect && price > 0) {
      const messageContent = {
        email: email,
        nickname: nick,
        message: message,
        missions: selectedMissions,
        price: price,
        tank: props.tankName,
      };

      setEmail("");
      setNick("");
      setMessage("");

      console.log(messageContent);
      alert("Wyslano wiadomosc");
    }
  };

  const validateForm = () => {
    if (isNickCorrect && price > 0 && nick.length > 2) return true;
    else return false;
  };

  return (
    <form onSubmit={submitForm}>
      <Box display="grid" placeItems="center" maxW="6xl" w="100%" mt={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <FormControl maxW="sm" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              onChange={handleEmail}
              borderColor="gray.300"
              type="email"
              placeholder="Twój email"
            />
          </FormControl>

          <FormControl mt={{ base: 5, md: 0 }} maxW="sm" isRequired>
            <FormLabel>Nick</FormLabel>
            <Input
              value={nick}
              onChange={handleNick}
              borderColor="gray.300"
              type="text"
              placeholder="Twój nick z gry"
              isInvalid={!isNickCorrect}
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
                required={props.requiredTanks[0]}
                missions={props.missions[0]}
                price={price}
                setPrice={setPrice}
                selectedMissions={selectedMissions}
                setSelectedMissions={setSelectedMissions}
              />
            </TabPanel>

            <TabPanel p={0}>
              <NationTab
                required={props.requiredTanks[1]}
                missions={props.missions[1]}
                price={price}
                setPrice={setPrice}
                selectedMissions={selectedMissions}
                setSelectedMissions={setSelectedMissions}
              />
            </TabPanel>

            <TabPanel p={0}>
              <NationTab
                required={props.requiredTanks[2]}
                missions={props.missions[2]}
                price={price}
                setPrice={setPrice}
                selectedMissions={selectedMissions}
                setSelectedMissions={setSelectedMissions}
              />
            </TabPanel>

            <TabPanel p={0}>
              <NationTab
                required={props.requiredTanks[3]}
                missions={props.missions[3]}
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
          type="submit"
          isDisabled={!validateForm()}
        >
          Wyślij!
        </Button>
      </Box>
    </form>
  );
};
