import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Container, SimpleGrid } from '@chakra-ui/layout';
import {
    Button,
    Textarea,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Prices } from '../../types';
import { createRequest, fetchNickname } from '../../helpers/FetchHelpers';

interface Props {
    type: string;
    prices: Prices;
}

export const FormBoosting: React.FC<Props> = (props) => {
    /** Input state */
    const [price, setPrice] = useState(0);
    const [email, setEmail] = useState<string>('');
    const [nick, setNick] = useState('');
    const [message, setMessage] = useState('');
    const [gameLevel, setGameLevel] = useState(2000);
    const [battlesCount, setBattlesCount] = useState(10);

    /** Components controllers */
    const [timer, setTimer] = useState<any>(null);
    const [isNickCorrect, setIsNickCorrect] = useState<boolean>(true);
    const [isEmailSending, setisEmailSending] = useState<boolean>(false);
    const toast = useToast();

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

    /** Basic inputs handlers */
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    /** Compute final price */
    const handlePrice = () => {
        if (gameLevel === 2000) setPrice(battlesCount * props.prices.Standard);
        else if (gameLevel === 3000) setPrice(battlesCount * props.prices.High);
        else if (gameLevel === 4000)
            setPrice(battlesCount * props.prices.Extreme);
    };

    /** Price controller */
    useEffect(() => {
        handlePrice();
    }, [gameLevel, battlesCount]);

    /** Submit form and create
     * request to server
     */
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            const data = {
                email: email,
                nick: nick,
                price: price,
                gameLevel: gameLevel,
                battlesCount: battlesCount,
                optionalMessage: message,
                type: props.type,
                content: `Oferta ${props.type} od gracza https://pl.wot-life.com/eu/player/${nick}.
Email kontaktowy klienta: ${email}. 
Dolecowy poziom gry: ${gameLevel} WN8.
Zamówiona ilość bitew: ${battlesCount}

Wiadomość od klienta: 
${message}
                          
        Szacowana cena: ${price}`,
            };

            setisEmailSending(true);
            const response = await createRequest(data);
            if (response?.status === 200) alert();
            setisEmailSending(false);
            clearForm();
        }
    };

    /** Basic input validator */
    const validateForm = () => {
        if (isNickCorrect && price > 0 && nick.length > 2) return true;
        else return false;
    };

    /** Clear form after submit */
    const clearForm = () => {
        setEmail('');
        setNick('');
        setMessage('');
    };

    const alert = () =>
        toast({
            title: 'Wysłano maila!',
            description: `${nick} przyjeliśmy twoje zgłoszenie, w ciągu 24h wystosujemy indywidualną ofertę.`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

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

                <Container mt={12} centerContent>
                    <Container
                        centerContent
                        backgroundColor="gray.200"
                        p={5}
                        pr={7}
                        pl={7}
                        borderRadius="xl"
                    >
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
                    <Container
                        centerContent
                        backgroundColor="gray.200"
                        p={5}
                        pr={7}
                        pl={7}
                        borderRadius="xl"
                    >
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

                <Box
                    backgroundColor="gray.200"
                    p={5}
                    pr={7}
                    pl={7}
                    borderRadius="xl"
                    fontSize="xl"
                    mt={12}
                >
                    Szacowana cena: <b style={{ color: '#805AD5' }}>{price}</b>{' '}
                    PLN
                </Box>

                <Button
                    leftIcon={<FaPaperPlane />}
                    mt={12}
                    colorScheme="purple"
                    variant="outline"
                    _focus={{ outline: 'none' }}
                    type="submit"
                    isDisabled={!validateForm()}
                    isLoading={isEmailSending}
                >
                    Wyślij!
                </Button>
            </Box>
        </form>
    );
};
