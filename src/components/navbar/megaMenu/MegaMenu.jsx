'use client'

import { useState } from "react";
import { Button, Box, Card, Divider, Link, Fade, Tooltip, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";


const MegaMenu = ({ active, options, buttonName }) => {

    console.log(active)

    const [open, setOpen] = useState(false);

    // open / close megaMEnu


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div onMouseLeave={handleClose} >
            <Button
                color="light"
                onClick={handleClick}
                onMouseEnter={handleClick}
            >
                {buttonName}
                {options && <ExpandMore />}
            </Button>
            <Divider
                sx={{
                    width: open || active ? "100%" : "0%"
                    , transition:
                        "width .2s ease-in-out , opacity .3s ease-in-out",
                    opacity: open || active ? "1" : "0",
                    border: "1px solid #e77619"
                }} />
            <Fade in={open}
                appear={true}
                timeout={250}
                unmountOnExit >
                <Box
                    sx={{
                        position: "absolute",
                        transitionDelay: "2s"
                    }}>
                    <Box onMouseLeave={handleClose} sx={{ ml: -6.5, mt: 3 }}>
                        <Card sx={{
                            display: options ? "flex" : "none",
                            flexDirection: "column",
                            width: "200px",
                            p: 1,
                            backgroundColor: "#15151bd8"
                        }}>
                            {options && options.map((opt, index) =>
                                <>
                                    <Tooltip key={index}
                                        title={opt.link}
                                        arrow
                                        placement="left" >
                                        <Link href={opt.link}
                                            sx={{
                                                my: 1,
                                                color: "white",
                                                cursor: "pointer",
                                                textDecoration: "none",
                                                fontFamily: "vazir",
                                                mx: "auto", px: 2
                                            }}>
                                            <Typography variant="body1">
                                                {opt.name}
                                            </Typography>
                                        </Link>
                                    </Tooltip >
                                    <Divider
                                        color="#e77619"
                                        sx={{
                                            display: index ===
                                                options.length - 1 ?
                                                "none"
                                                : "block",
                                        }} />
                                </>
                            )}
                        </Card>
                    </Box>
                </Box>
            </Fade>

        </div >
    );
};

export default MegaMenu; 