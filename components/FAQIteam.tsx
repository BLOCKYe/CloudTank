import { Box, Container, Divider, Text } from '@chakra-ui/layout';
import React from 'react';
import { FAQs } from '../types';

export const FAQIteam: React.FC<FAQs> = (props) => {
    return (
        <Box>
            <Container
                textAlign="center"
                mt={{ base: 5, xl: 14 }}
                centerContent
            >
                <Text fontSize="xl" fontWeight="bold">
                    {props.title}
                </Text>
                <Text fontSize="sm" mt={3}>
                    {props.content}
                </Text>
            </Container>
            {props.items !== props.index + 1 && (
                <Divider
                    display={{ xl: 'none' }}
                    mt={14}
                    borderColor="gray.300"
                />
            )}
        </Box>
    );
};
