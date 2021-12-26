import { Box, Divider } from '@chakra-ui/layout';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SubpageHeader } from '../components/Subpages/SubpageHeader';
import { FormMissionsExtended } from '../components/Subpages/FormMissionsExtended';
import axios from 'axios';
import { Props } from '../types';
import Head from 'next/head';
import { FetchSubpages } from '../helpers/FetchStaticProps';

export async function getStaticProps() {
    const data = await FetchSubpages.T28Concept();
    return { props: { data }, revalidate: 600 };
}

export const T28Concept: React.FC<Props> = ({ data }) => {
    return (
        <Box
            p={3}
            w="100%"
            h="100%"
            color="gray.800"
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg="gray.100"
        >
            <Head>
                <title>CloudTank - Misje T28 Concept</title>
                <meta name="description" content="World of tanks boosting" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <SubpageHeader
                color={data.header.color}
                title={data.header.title}
                desc={data.header.description}
                label={data.header.label}
                image={data.header.image}
                req={data.header.requirements}
            />
            <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
            <FormMissionsExtended
                requiredTanks={data.requiredTanks}
                missions={data.Missions}
                tankName="T28Concept"
            />
            <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
            <Footer />
        </Box>
    );
};

export default T28Concept;
