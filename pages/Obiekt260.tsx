import { Box, Divider } from '@chakra-ui/layout';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SubpageHeader } from '../components/Subpages/SubpageHeader';
import { FormMissionsExtended } from '../components/Subpages/FormMissionsExtended';
import { Props } from '../types';
import Head from 'next/head';
import { FetchSubpages } from '../helpers/FetchStaticProps';

export async function getStaticProps() {
    const data = await FetchSubpages.obiekt260();
    return { props: { data } };
}

export const Obiekt260: React.FC<Props> = ({ data }) => {
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
                <title>CloudTank - Misje Objekt 260</title>
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
                tankName="Obiekt260"
            />
            <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
            <Footer />
        </Box>
    );
};

export default Obiekt260;
