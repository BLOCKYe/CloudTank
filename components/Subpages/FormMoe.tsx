import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/layout";
import {
  Button,
  Textarea,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Datum } from "../../types";
import { fetchNickname, fetchTanks } from "../../helpers/FetchHelpers";

interface Props {
  tankName: string;
}

export const FormMoe: React.FC<Props> = (props) => {
  const [price, setPrice] = useState(0);
  const [email, setEmail] = useState<string>("");
  const [nick, setNick] = useState("");
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState<any>(null);
  const [isNickCorrect, setIsNickCorrect] = useState<boolean>(true);
  const [tier, setTier] = useState("10");
  const [actualMoePercent, setactualMoePercent] = useState(10);
  const [targetMoe, setTargetMoe] = useState("1");
  const [tankList, setTankList] = useState<Datum[]>([]);
  const [maxActualMoePercent, setMaxActualMoePercent] = useState<number>(94);
  const [tankName, setTankName] = useState("");
  const [isTankListLoading, setisTankListLoading] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  /** Check nick in Wot database
   * function will start 1s after
   * stop typing
   */
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

  const handleTier = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTier(event.target.value);
  };

  const handleTankName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTankName(event.target.value);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handlePrice = () => {
    let newPrice = 0;
    const x = actualMoePercent;
    const newTier = parseInt(tier);
    if (targetMoe === "3") {
      newPrice = -((67 * x * x * x) / 49725) + (887 * x * x) / 6630 - (18679 * x) / 3978 + 460;
    } else if (targetMoe === "2") {
      newPrice = -((19 * x * x * x) / 68250) + (7 * x * x) / 325 - (5231 * x) / 2730 + 260;
    } else if (targetMoe === "1") {
      newPrice = -((37 * x * x * x) / 92400) + (45 * x * x) / 1232 - (1913 * x) / 924 + 110;
    }

    setPrice(Math.round(newPrice / (10 / newTier)));
  };

  useEffect(() => {
    const fetch = async () => {
      setisTankListLoading(true);
      setTankList(await fetchTanks(tier));
      setisTankListLoading(false);
    };
    fetch();
  }, [tier]);

  useEffect(() => {
    handlePrice();
  }, [tier, targetMoe, actualMoePercent]);

  /** Set limits on
   * actual percent
   */
  useEffect(() => {
    switch (targetMoe) {
      case "1": {
        setMaxActualMoePercent(64);
        if (actualMoePercent > 64) setactualMoePercent(64);
        break;
      }

      case "2": {
        setMaxActualMoePercent(84);
        if (actualMoePercent > 84) setactualMoePercent(84);
        break;
      }

      case "3": {
        setMaxActualMoePercent(94);
        break;
      }

      default:
        break;
    }
  }, [targetMoe]);

  const submitForm = (e: any) => {
    e.preventDefault();

    if (isNickCorrect && price > 0) {
      const messageContent = {
        email: email,
        nickname: nick,
        message: message,
        price: price,
        level: tier,
        tankToMoe: tankName,
        actualMoe: actualMoePercent,
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
            <Input value={email} onChange={handleEmail} borderColor="gray.300" type="email" placeholder="Twój email" />
          </FormControl>

          <FormControl mt={{ base: 5, md: 0 }} maxW="sm" isRequired>
            <FormLabel>Nick</FormLabel>
            <Input
              value={nick}
              onChange={handleNick}
              borderColor={isNickCorrect && nick.length > 2 ? "green.300" : "gray.300"}
              borderWidth={isNickCorrect && nick.length > 2 ? 2 : 1}
              type="text"
              placeholder="Twój nick z gry"
              isInvalid={!isNickCorrect}
            />
          </FormControl>
        </SimpleGrid>

        <Container mt={12} centerContent>
          <Select isRequired bgColor="gray.200" variant="filled" onChange={handleTier} value={tier} cursor="pointer">
            <option value="5">Tier V</option>
            <option value="6">Tier VI</option>
            <option value="7">Tier VII</option>
            <option value="8">Tier VIII</option>
            <option value="9">Tier IX</option>
            <option value="10">Tier X</option>
          </Select>
        </Container>

        <Container mt={5} centerContent>
          {isTankListLoading ? (
            <Button isLoading />
          ) : (
            <Select
              value={tankName}
              onChange={handleTankName}
              mt={1}
              isRequired
              bgColor="gray.200"
              variant="filled"
              cursor="pointer"
            >
              {Object.entries(tankList).map((e: any) => (
                <option key={e[0]} value={e[1]?.name}>
                  {e[1]?.name}
                </option>
              ))}
            </Select>
          )}
        </Container>

        <Container mt={12} centerContent>
          <Box>Wybierz docelowy poziom biegłości</Box>
          <RadioGroup colorScheme="purple" onChange={setTargetMoe} value={targetMoe} p={3} borderRadius="xl">
            <Stack fontWeight="bold" direction="row" spacing={7}>
              <Radio bgColor="gray.200" borderRadius="xl" p={3} cursor="pointer" value="1" borderColor="gray.300">
                65%
              </Radio>
              <Radio bgColor="gray.200" borderRadius="xl" p={3} cursor="pointer" borderColor="gray.300" value="2">
                85%
              </Radio>
              <Radio bgColor="gray.200" borderRadius="xl" p={3} cursor="pointer" borderColor="gray.300" value="3">
                95%
              </Radio>
            </Stack>
          </RadioGroup>
        </Container>

        <Container mt={12} centerContent>
          <Container centerContent backgroundColor="gray.200" p={5} pr={7} pl={7} borderRadius="xl">
            <Box>Wybierz aktualny poziom biegłości</Box>
            <Box fontSize="xl" fontWeight="bold">
              {actualMoePercent} %
            </Box>
          </Container>
          <Slider
            onChange={(value) => setactualMoePercent(value)}
            defaultValue={10}
            min={0}
            max={maxActualMoePercent}
            step={1}
            value={actualMoePercent}
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
