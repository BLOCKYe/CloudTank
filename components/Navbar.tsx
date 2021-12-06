import React from 'react';
import { Box, Link } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { IconButton } from '@chakra-ui/button';
import { MdLocalOffer } from 'react-icons/md';
import { FaPaperPlane, FaQuestion, FaHeart } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { CgMenuMotion } from 'react-icons/cg';

export const Navbar: React.FC = () => {
    return (
        <Box
            display="grid"
            placeItems="center"
            pos="fixed"
            top="0"
            left="0"
            w="100%"
            zIndex="100"
            boxShadow="sm"
            bg="gray.100"
            p={5}
        >
            <Box
                display="grid"
                gridTemplateColumns="1fr 1fr"
                w="100%"
                h="100%"
                maxW="6xl"
                alignItems="center"
            >
                <Link href="/" _focus={{ outline: 'none' }}>
                    <Image
                        href="/"
                        h="40px"
                        src="https://firebasestorage.googleapis.com/v0/b/fir-test-1e090.appspot.com/o/logo.svg?alt=media&token=4fbd471b-9ae7-47b1-bb78-8a7861afc183"
                        alt="cloud tank"
                    />
                </Link>

                <Menu id="test">
                    <MenuButton
                        _focus={{ outline: 'none' }}
                        maxW="30px"
                        fontSize="xl"
                        borderColor="gray.300"
                        justifySelf="end"
                        as={IconButton}
                        aria-label="Options"
                        icon={<CgMenuMotion />}
                        variant="outline"
                    />
                    <MenuList
                        bg="gray.100"
                        boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
                    >
                        <MenuItem id="1" icon={<MdLocalOffer />}>
                            Nasza oferta
                        </MenuItem>
                        <MenuItem id="2" icon={<FaQuestion />}>
                            FAQ
                        </MenuItem>
                        <MenuItem id="3" icon={<FaPaperPlane />}>
                            Kontakt
                        </MenuItem>
                        <MenuItem id="4" icon={<FaHeart />}>
                            Opinie
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
};
