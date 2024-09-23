'use client'

import { useState } from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Fab,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';

// components
import NavLink from "../navLink/NavLink";
import LogoAndMenu from "../logo&Menu/LogoAndMenu";
import CartButton from "../cartButton/CartButton";
import NavbarSearch from '../navbarSearch/NavbarSearch';
import Menu from "../menu/Menu";
import InforamtionUser from '@/src/InformationUser/InforamtionUser';
import Link from 'next/link';
import { Login } from '@mui/icons-material';


const Navbar = ({ Language, dict }) => {


    const [openDrawer, setOpenDrawer] = useState(false)

    const trigger = useScrollTrigger({
        threshold: 1,
        disableHysteresis: true
    });


    return (
        <>
            <Menu openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />
            <AppBar sx={{
                backgroundColor: trigger ? "#00000073" : "transparent",
                backdropFilter: trigger ? "blur(20px)" : "none",
                transition: 'background-color 0.5s ease',
                borderRadius: 2,
                display: "flex",
                boxShadow: "none",
                p: 1,
                py: 2.5
            }}>
                <Toolbar>
                    <NavbarSearch Language={Language} dict={dict} />
                    <Box sx={{
                        flexGrow: .1,
                        display: {
                            xs: "none",
                            sm: "flex"
                        },
                        gap: 5
                    }}>
                        {/* cart Button Shop */}
                        <CartButton Language={Language} />
                    </Box>
                    {/* NavLinks */}
                    <NavLink trigger={trigger} Language={Language} dict={dict} />
                    {/* information user */}
                    <Box sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    }}>
                        {/* log bu */}
                        <InforamtionUser Language={Language} />
                    </Box>
                    <Box sx={{
                        textAlign: "end",
                        flexGrow: {
                            xs: 1,
                            md: 3
                        },
                    }}>
                        {/* logo and menuIcon */}
                        <LogoAndMenu setOpenDrawer={setOpenDrawer} Language={Language} />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar