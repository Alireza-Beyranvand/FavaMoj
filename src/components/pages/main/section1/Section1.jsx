'use client'

import {
    Box,
    Button,
    Slide,
    Typography,
    Zoom,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Business, Bolt } from "@mui/icons-material";
import { RandomReveal } from 'react-random-reveal';
import TextTransition, { presets } from 'react-text-transition';
import { alphabetEnglish, alphabetPersian } from "@/src/constants/index";
import bg from "../../../../assets/background.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/app/loading";
import { useSelector } from "react-redux";
import { selectDictionary, selectSystemLanguage } from "@/store/slice/languageSlice";


export default function Section1() {


    const dic = useSelector((state) => selectDictionary(state))
    const Language = useSelector((state) => selectSystemLanguage(state))


    const [open, setOpen] = useState(false);
    // for transition text
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setOpen(true)
        const startTransition = setInterval(() =>
            setIndex((index) => index + 1),
            3000);
        return () => clearTimeout(startTransition);
    }, [])

    return (
        <>
            {open ? (
                <>
                    <Slide direction="up" in>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Box>
                                <Image src={bg}
                                    alt="alt"
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "2rem",
                                        marginBottom: ".8rem",
                                        width: "97%",
                                        height: "85%",
                                        margin: "auto auto",

                                    }}
                                />
                            </Box>
                        </Grid>
                    </Slide >
                    <Slide in direction="down">
                        <Grid size={{ xs: 12, md: 6 }} sx={{
                            display: "flex", alignItems: "center",
                            flexDirection: "column",
                            gap: 4.8,
                            justifyContent: "center",
                            mt: {
                                xs: 3,
                                md: -5
                            }
                        }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <Typography color="whitesmoke" sx={{
                                    fontSize: {
                                        xs: "2.6rem",
                                        md: "4.5rem"
                                    },

                                    textShadow: "3px 5px black , 2px 2px 10px #606060",
                                }}>
                                    <RandomReveal isPlaying
                                        duration={3}
                                        characters={Language?.main?.name}
                                        characterSet={dic === "en-us" ? alphabetEnglish : alphabetPersian}
                                    />
                                </Typography>
                                <Typography color="whitesmoke" sx={{
                                    fontSize: {
                                        xs: "2.1rem",
                                        md: "2.6rem"
                                    },
                                    textShadow: "3px 5px black , 2px 2px 10px #606060",
                                }}>
                                    <RandomReveal isPlaying
                                        duration={4}
                                        characters={Language?.main?.name2}
                                        characterSet={dic === "en-us" ? alphabetEnglish : alphabetPersian} />
                                </Typography>
                            </Box>
                            <Box>
                                <Typography color="whitesmoke" sx={{
                                    display: "flex", fontSize: {
                                        xs: "1.5rem",
                                        md: "2.5rem"
                                    },
                                    textShadow: "3px 4px #3c3c3c"
                                }}>
                                    <TextTransition springConfig={presets.wobbly}>
                                        {Language?.main?.transition[index % Language?.main?.transition.length]}
                                    </TextTransition>
                                    _#
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: "flex", gap: 3, width: 1, flexDirection: {
                                    xs: "column",
                                    md: "row"
                                }
                            }}>
                                <Zoom in style={{ transitionDelay: "300ms" }}>
                                    <Button variant="contained"
                                        color="warning"
                                        sx={{
                                            py: 1.5,
                                            width: "100%",
                                            boxShadow: 7,
                                            borderRadius: 10,
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 1
                                        }}>
                                        <Typography variant="h6" color="dark" sx={{ fontWeight: 900 }}>
                                            {Language?.main?.buttonGo}
                                        </Typography>
                                        < Bolt sx={{ fontSize: "1.8rem", color: "black" }} />
                                    </Button>
                                </Zoom>
                                <Zoom in style={{ transitionDelay: "400ms" }}>
                                    <Button variant="outlined"
                                        color="warning"
                                        sx={{
                                            py: 1.5,
                                            width: "100%",
                                            boxShadow: 20,
                                            borderRadius: 10,
                                            backgroundColor: "#00000080",
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 1
                                        }}>
                                        <Typography variant="h6" sx={{ fontWeight: 900 }}>
                                            {Language?.main?.buttonRepresentation}
                                        </Typography>
                                        <Business sx={{ fontSize: "1.8rem" }} />
                                    </Button>
                                </Zoom>
                            </Box>
                        </Grid>
                    </Slide>
                </>
            ) : (<Loading />)}
        </>
    )
}