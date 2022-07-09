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
    prices: number;
    type: string
}

export const FormDefault: React.FC<Props> = (props) => {
    /** Input state */
    const [email, setEmail] = useState<string>('');
    const [nick, setNick] = useState('');
    const [message, setMessage] = useState('');

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

    /** Submit form and create
     * request to server
     */
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            const data = {
                email: email,
                nick: nick,
                price: props.prices,
                optionalMessage: message,
                type: props.type,
                content: `Oferta ${props.type} od gracza https://pl.wot-life.com/eu/player/${nick}.
Email kontaktowy klienta: ${email}. 
Zdobycie czołgu z kampanii.

Wiadomość od klienta: 
${message}
                          
        Szacowana cena: ${props.prices}`,
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
        if (isNickCorrect && nick.length > 2) return true;
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
                    Szacowana cena: <b style={{ color: '#805AD5' }}>{props.prices}</b>{' '}
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
