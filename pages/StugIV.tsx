import { Box, Divider } from '@chakra-ui/layout';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SubpageHeader } from '../components/Subpages/SubpageHeader';
import { FormMissionsExtended } from '../components/Subpages/FormMissionsExtended';
import axios from 'axios';
import { Props } from '../types';
import Head from 'next/head';

export async function getStaticProps() {
    const response = await axios.get(
        `https://cloud-tank-server.herokuapp.com/stug-ivs`
    );

    const data = await response.data[0];
    return { props: { data } };
}

export const StugIV: React.FC<Props> = ({ data }) => {
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
                <title>CloudTank - Misje Stug IV</title>
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
                tankName="StugIV"
            />
            <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
            <Footer />
        </Box>
    );
};

export default StugIV;
