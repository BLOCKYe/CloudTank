import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, SimpleGrid } from '@chakra-ui/layout';
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Button,
    Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { NationTabExtended } from './NationTabExtended';
import { NationTabList } from './NationTabList';
import { Mission, RequiredTank } from '../../types';
import { createRequest, fetchNickname } from '../../helpers/FetchHelpers';
import { useToast } from '@chakra-ui/react';

interface FormMissionsProps {
    tankName: string;
    requiredTanks: RequiredTank[];
    missions: Mission[];
}

export const FormMissionsExtended: React.FC<FormMissionsProps> = (props) => {
    /** Input state */
    const [price, setPrice] = useState(0);
    const [email, setEmail] = useState<string>('');
    const [nick, setNick] = useState('');
    const [message, setMessage] = useState('');
    const [selectedMissions, setSelectedMissions] = useState<string[]>([]);

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

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            const data = {
                email: email,
                nick: nick,
                price: price,
                optionalMessage: message,
                missions: selectedMissions,
                type: props.tankName,
                content: `Oferta ${props.tankName} od gracza https://pl.wot-life.com/eu/player/${nick}.
Email kontaktowy klienta: ${email}. 
Wybrane przez klienta misje: ${selectedMissions}

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

                <Tabs
                    mt={{ base: 12, md: 24 }}
                    isFitted
                    variant="enclosed"
                    maxW="2xl"
                >
                    <TabList borderColor="gray.400" mb={12}>
                        <NationTabList value="LT" />
                        <NationTabList value="MD" />
                        <NationTabList value="HT" />
                        <NationTabList value="TD" />
                        <NationTabList value="SPG" />
                    </TabList>

                    <TabPanels>
                        <TabPanel p={0}>
                            <NationTabExtended
                                required={props.requiredTanks[0]}
                                missions={props.missions[0]}
                                price={price}
                                setPrice={setPrice}
                                selectedMissions={selectedMissions}
                                setSelectedMissions={setSelectedMissions}
                            />
                        </TabPanel>

                        <TabPanel p={0}>
                            <NationTabExtended
                                required={props.requiredTanks[1]}
                                missions={props.missions[1]}
                                price={price}
                                setPrice={setPrice}
                                selectedMissions={selectedMissions}
                                setSelectedMissions={setSelectedMissions}
                            />
                        </TabPanel>

                        <TabPanel p={0}>
                            <NationTabExtended
                                required={props.requiredTanks[2]}
                                missions={props.missions[2]}
                                price={price}
                                setPrice={setPrice}
                                selectedMissions={selectedMissions}
                                setSelectedMissions={setSelectedMissions}
                            />
                        </TabPanel>

                        <TabPanel p={0}>
                            <NationTabExtended
                                required={props.requiredTanks[3]}
                                missions={props.missions[3]}
                                price={price}
                                setPrice={setPrice}
                                selectedMissions={selectedMissions}
                                setSelectedMissions={setSelectedMissions}
                            />
                        </TabPanel>

                        <TabPanel p={0}>
                            <NationTabExtended
                                required={props.requiredTanks[4]}
                                missions={props.missions[4]}
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
