import { CheckboxGroup, Checkbox } from '@chakra-ui/checkbox';
import { Box, Divider } from '@chakra-ui/layout';
import { Tag, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MissionElement, Mission, RequiredTank } from '../../types';

interface Props {
    required: RequiredTank;
    missions: Mission;
    price: number;
    setPrice: (price: number) => void;
    selectedMissions: string[];
    setSelectedMissions: (selectedMissions: string[]) => void;
}

export const NationTab: React.FC<Props> = (props) => {
    const initialChecked = new Array(15).fill(false);
    const [checked, setChecked] = useState(initialChecked);

    /** Selected missions controller
     * Add unselected tabs on check
     * to array and sum price
     */
    const handleCheck = (mission: MissionElement, index: number) => {
        let newChecked = checked;
        newChecked[index] = !checked[index];
        setChecked(newChecked);
        let newSelected: string[] = props.selectedMissions;
        if (checked[index]) {
            props.setPrice(props.price + mission.price);
            newSelected.push(`\n${mission.name} za ${mission.price} zł`);
            props.setSelectedMissions(newSelected);
        } else {
            props.setPrice(props.price - mission.price);
            newSelected = props.selectedMissions.filter(
                (item: string) =>
                    item !== `\n${mission.name} za ${mission.price} zł`
            );
            props.setSelectedMissions(newSelected);
        }
    };

    return (
        <Box
            fontSize={{ base: 'l', md: 'xl' }}
            textAlign="center"
            display="grid"
            placeItems="center"
        >
            Upewnij się, że posiadasz przynajmniej jeden czołg danego typu:
            <Box mt={3}>
                {props.required.lights.map((tank: MissionElement) => (
                    <Tag
                        fontSize=".8rem"
                        mr={1}
                        mt={1}
                        key={tank.name}
                        colorScheme="whatsapp"
                    >
                        {tank.name}
                    </Tag>
                ))}
            </Box>
            <Box mt={3}>
                {props.required.heavies.map((tank: MissionElement) => (
                    <Tag
                        fontSize=".8rem"
                        mr={1}
                        mt={1}
                        key={tank.name}
                        colorScheme="blue"
                    >
                        {tank.name}
                    </Tag>
                ))}
            </Box>
            <Box mt={3}>
                {props.required.mediums.map((tank: MissionElement) => (
                    <Tag
                        fontSize=".8rem"
                        mr={1}
                        mt={1}
                        key={tank.name}
                        colorScheme="yellow"
                    >
                        {tank.name}
                    </Tag>
                ))}
            </Box>
            {props.required.arty && (
                <Box mt={3}>
                    {props.required.arty.map((tank: MissionElement) => (
                        <Tag
                            fontSize=".8rem"
                            mr={1}
                            mt={1}
                            key={tank.name}
                            colorScheme="red"
                        >
                            {tank.name}
                        </Tag>
                    ))}
                </Box>
            )}
            <Divider borderColor="gray.300" mt={12} mb={12} />
            <Box fontSize="xl"> Wybierz misje</Box>
            <Box
                d="grid"
                mt={5}
                gridTemplateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }}
            >
                {props.missions.missions.map(
                    (mission: MissionElement, index) => (
                        <CheckboxGroup key={mission.name}>
                            <Button
                                borderColor="gray.300"
                                variant="outline"
                                colorScheme="gray"
                                m={{ base: 1, md: 2 }}
                                p={{ sm: 5, md: 7 }}
                                onChange={() => handleCheck(mission, index)}
                            >
                                <Checkbox p={1} colorScheme="purple">
                                    <Box
                                        fontSize={{
                                            base: '.7rem',
                                            sm: '.9rem',
                                            md: '1rem',
                                        }}
                                    >
                                        {mission.name} | {mission.price} PLN
                                    </Box>
                                </Checkbox>
                            </Button>
                        </CheckboxGroup>
                    )
                )}
            </Box>
        </Box>
    );
};
