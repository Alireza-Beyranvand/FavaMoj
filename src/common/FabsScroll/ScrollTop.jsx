'use client'

import {
    Box,
    Fab,
    useMediaQuery,
    useScrollTrigger
} from '@mui/material';
import {
    KeyboardArrowDown
} from '@mui/icons-material';
import { useEffect, useState } from 'react';


const ScrollTop = () => {




    // off when scroll
    const trigger = useScrollTrigger({
        triggerOnce: true,
        threshold: 1,
        disableHysteresis: true
    });




    return (
        <>
            <Box sx={{
                display: {
                    xs: "none",
                    md: "block"
                }
            }}>
                <Fab size="medium" className="scrollBottom"
                    sx={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '48%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'warning.main',
                        borderRadius: '50%',
                        display: trigger ? "none" : "block"
                    }}
                    onClick={() =>
                        window.scrollTo({ top: 320, behavior: 'smooth' })}>
                    <KeyboardArrowDown sx={{ verticalAlign: "middle" }} />
                </Fab>
            </Box>
        </>
    )
}

export default ScrollTop