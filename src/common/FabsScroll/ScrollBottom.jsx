'use client'

import { Fab, Grow, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollBottom = () => {

    // for scroll location
    const scrollAnimate = useScrollTrigger({
        threshold: 10,
        disableHysteresis: "true"
    })

    return (
        <Grow
            in={scrollAnimate}
            style={{ transformOrigin: '0 0 0' }}
            {...(scrollAnimate ? { timeout: 500 } : {})}
        >
            <Fab size="medium" color="warning"
                sx={{
                    position: "fixed",
                    bottom: 70,
                    right: {
                        xs: 50,
                        md: 80
                    },
                    boxShadow: 50
                }} onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })}>
                <KeyboardArrowUp sx={{
                    verticalAlign: "middle",
                    color: "text.primary"
                }} />
            </Fab >
        </Grow>

    )
}

export default ScrollBottom