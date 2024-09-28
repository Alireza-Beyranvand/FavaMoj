'use client';

import DividerChip from "@/src/common/DividerChip/DividerChip";
import { Download, } from "@mui/icons-material";
import { Box, Button, Slide, Typography, useScrollTrigger, } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSystemLanguage } from "@/store/slice/languageSlice";


const InstallButton = () => {

    const Language = useSelector((state) => selectSystemLanguage(state))


    const view = useScrollTrigger({
        threshold: 1,
        disableHysteresis: true
    })



    const [deferredPrompt, setDeferedPrompt] = useState(null);
    const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {

        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferedPrompt(e);
            setShowInstallButton(true);
        }
        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
        }
    }, []);



    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(result => {
                if (result.outcome === "accepted") {
                    console.log("user acc")
                } else {
                    console.log("dissmised")
                }
                setDeferedPrompt(null);
                setShowInstallButton(false);
            })
        }
    }

    if (!showInstallButton) {
        return null
    }


    return (
        <Slide in={view} direction="left" style={{
            transitionDelay: "900ms",
            paddingTop: "15rem"
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                gap: 6,
            }} >
                <Button variant="contained" onClick={handleInstallClick}
                    sx={{
                        p: 5,
                        backgroundColor: "orange",
                        boxShadow: 12
                        , borderRadius: 8
                    }}>
                    <Typography variant="h5" color="black">
                        {Language?.main?.applicationInstallButton}
                    </Typography>
                    <Download sx={{ px: 2, fontSize: "3rem", color: "black" }} />
                </Button>
                <DividerChip title={"descriptionInstallingApplication"}
                    pageName={"main"}
                    textColor={"warning"}
                    chipVariant={"filled"}
                    chipColor={"black"} />
            </Box>
        </Slide>
    );

};

export default InstallButton;