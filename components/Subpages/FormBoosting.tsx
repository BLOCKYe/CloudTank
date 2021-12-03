import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, SimpleGrid } from "@chakra-ui/layout";
import { Button, Textarea, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Prices } from "../../types";
import { fetchNickname } from "../../helpers/FetchHelpers";

interface Props {
  tankName: string;
  prices: Prices;
}

export const FormBoosting: React.FC<Props> = (props) => {
  const [price, setPrice] = useState(0);
  const [email, setEmail] = useState<string>("");
  const [nick, setNick] = useState("");
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState<any>(null);
  const [isNickCorrect, setIsNickCorrect] = useState<boolean>(true);
  const [gameLevel, setGameLevel] = useState(2000);
  const [battlesCount, setBattlesCount] = useState(10);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1) setIsNickCorrect(false);
    setNick(e.target.value);
    clearTimeout(timer);
    setTimer(
      setTimeout(async () => {
        setIsNickCorrect(await fetchNickname(e.target.value));
      }, 1000)
    );
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    if (isNickCorrect && price > 0) {
      const messageContent = {
        email: email,
        nickname: nick,
        message: message,
        price: price,
        level: gameLevel,
        battles: battlesCount,
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

  const handlePrice = () => {
    if (gameLevel === 2000) setPrice(battlesCount * props.prices.Standard);
    else if (gameLevel === 3000) setPrice(battlesCount * props.prices.High);
    else if (gameLevel === 4000) setPrice(battlesCount * props.prices.Extreme);
  };

  useEffect(() => {
    handlePrice();
  }, [gameLevel, battlesCount]);

  return (
    <form onSubmit={submitForm}>
      <Box display="grid" placeItems="center" maxW="6xl" w="100%" mt={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <FormControl maxW="sm" isRequired>
            <FormLabel>Email</FormLabel>
            <Input value={email} onChange={handleEmail} borderColor="gray.300" type="email" placeholder="Twój email" />
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

        <Container mt={12} centerContent>
          <Container centerContent backgroundColor="gray.200" p={5} pr={7} pl={7} borderRadius="xl">
            <Box> Wybierz jakość gry </Box>
            <Box fontSize="xl" fontWeight="bold">
              {gameLevel} WN8
            </Box>
          </Container>
          <Slider
            onChangeEnd={(val) => setGameLevel(val)}
            aria-label="slider-ex-1"
            defaultValue={2000}
            min={2000}
            max={4000}
            step={1000}
            mt={5}
            colorScheme="purple"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Container>

        <Container mt={12} centerContent>
          <Container centerContent backgroundColor="gray.200" p={5} pr={7} pl={7} borderRadius="xl">
            <Box> Wybierz ilość </Box>
            <Box fontSize="xl" fontWeight="bold">
              {battlesCount} bitew
            </Box>
          </Container>
          <Slider
            onChangeEnd={(val) => setBattlesCount(val)}
            aria-label="slider-ex-1"
            defaultValue={10}
            min={10}
            max={100}
            step={10}
            mt={5}
            colorScheme="purple"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Container>

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

        <Box backgroundColor="gray.200" p={5} pr={7} pl={7} borderRadius="xl" fontSize="xl" mt={12}>
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
