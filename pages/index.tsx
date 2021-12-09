import { Box, Divider, SimpleGrid } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Comments } from '../components/MainPage/Comments';
import { Contact } from '../components/MainPage/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/MainPage/Header';
import { Offer } from '../components/MainPage/Offer';
import { Navbar } from '../components/Navbar';
import { Promo } from '../components/MainPage/Promo';
import { FAQ } from '../components/MainPage/FAQ';
import { Promotion, Feedback, FAQs } from '../types';
import { FetchMainPage } from '../helpers/FetchStaticProps';

export async function getStaticProps() {
    const promo = await FetchMainPage.promo();
    const faq = await FetchMainPage.faq();
    const feedback = await FetchMainPage.feedback();
    return { props: { promo, feedback, faq } };
}

export interface Props {
    promo: Promotion;
    feedback: Feedback[];
    faq: FAQs[];
}

const Home: NextPage<Props> = ({ promo, feedback, faq }) => {
    return (
        <Box>
            <Head>
                <title>CloudTank</title>
                <meta name="description" content="World of tanks boosting" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Box
                p={5}
                w="100%"
                h="100%"
                color="gray.800"
                display="flex"
                flexDirection="column"
                alignItems="center"
                bg="gray.100"
            >
                <SimpleGrid
                    mt={{ base: 12, xl: '20vh' }}
                    spacing={24}
                    maxW="6xl"
                    placeItems="center"
                    columns={{ base: 1, xl: 2 }}
                >
                    <Header isDescription={true} />
                    <Promo promo={promo} />
                </SimpleGrid>

                <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.100" />

                <Offer />

                <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />

                <FAQ data={faq} />

                <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />

                <Contact />

                <Divider mt={{ base: 24, md: 24 }} borderColor="gray.300" />

                <Comments data={feedback} />

                <Divider mt={{ base: 12, xl: 24 }} borderColor="gray.300" />

                <Footer />
            </Box>
        </Box>
    );
};

export default Home;
