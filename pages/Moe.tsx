import { Box, Divider } from '@chakra-ui/layout';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SubpageHeader } from '../components/Subpages/SubpageHeader';
import axios from 'axios';
import Head from 'next/head';
import { MoeType } from '../types';
import { FormMoe } from '../components/Subpages/FormMoe';
import { FetchSubpages } from '../helpers/FetchStaticProps';

export async function getStaticProps() {
    const data = await FetchSubpages.moe();
    return { props: { data }, revalidate: 600 };
}

interface Props {
    data: MoeType;
}

export const Moe: React.FC<Props> = ({ data }) => {
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
                <title>CloudTank - Odznaki biegłości</title>
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
            <FormMoe type="Odznaki biegłości" />
            <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
            <Footer />
        </Box>
    );
};

export default Moe;
