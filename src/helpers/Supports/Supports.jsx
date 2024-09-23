'use client'

import { useState } from 'react';
import { Box } from '@mui/material';
import BtnOpen from "./Components/SpButton/BtnOpen";
import Layout from "./SpLayout/Layout";


// responsic Style

const Supports = () => {


    const [statusSwitch, setStatusSwitch] = useState(false);

    // style MUI
    const BoxStyle = {
        position: "fixed",
        top: "86.6%", left: "4.6%",
        direction: "rtl",
        display: {
            xs: "none",
            md: "block"
        },
        zIndex: 2
    }

    return (
        <>
            <Box /* Supports Buttton */
                sx={BoxStyle}  >
                <Layout setStatusSwitch={setStatusSwitch} statusSwitch={statusSwitch} />
                <BtnOpen setStatusSwitch={setStatusSwitch} statusSwitch={statusSwitch} />
            </Box>
        </>
    )
};

export default Supports;