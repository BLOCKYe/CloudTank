import { Box, Divider } from '@chakra-ui/layout';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SubpageHeader } from '../components/Subpages/SubpageHeader';
import Head from 'next/head';
import { FormBoosting } from '../components/Subpages/FormBoosting';
import { Wn8 } from '../types';
import { FetchSubpages } from '../helpers/FetchStaticProps';
import {FormDefault} from "../components/Subpages/FormDefault";


export const Kampania: React.FC= () => {
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
                <title>CloudTank - Kampania</title>
                <meta name="description" content="World of tanks boosting" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <SubpageHeader
                color={'yellow'}
                title={'Czołg z kampanii'}
                desc={'Oferta obejmuje zdobycie czołgu na nadchodzącej kampanii.'}
                label={'Kampania'}
                image={'/Chief.jpg'}
                req={'Aby wykonać zlecenie wymagamy kilku meta czołgów X tieru.'}
            />
            <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
            <FormDefault prices={1000} type={'Kampania'}/>
            <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />
            <Footer />
        </Box>
    );
};

export default Kampania;
