'use client'


import { Box, Button, TextField, Typography, Zoom } from "@mui/material"
import Grid from "@mui/material/Grid2";
import { ForwardToInbox, } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";


const EmailBox = ({ Language, dict }) => {


    // for animation scroll
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    })

    return (
        <>
            <Zoom in={inView} ref={ref} style={{
                transitionDelay: "240ms"
            }}>
                <Box sx={{
                    width: "65%",
                    backgroundColor: "warning.main", mx: "auto",
                    position: "relative", zIndex: 1,
                    bottom: "11.5%",
                    borderRadius: 5,
                    p: 3.5,
                    boxShadow: ".5px .5px 10px .5px #ec8d10",
                }}>
                    <Grid container sx={{ px: 3, py: 1 }}>
                        <Grid size={{ xs: 12, md: 6, }} sx={{ textAlign: "start" }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                direction: "rtl",
                                gap: 2
                            }}>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <Typography sx={{ fontSize: "1.5rem" }}>
                                        {Language.main.footerEmail.Membership}
                                    </Typography>
                                    <ForwardToInbox sx={{
                                        fontSize: "2.1rem", display: {
                                            xs: "none",
                                            md: "block"
                                        }
                                    }} />
                                </Box>
                                <TextField size="small" sx={{ width: 1, mb: 1 }}
                                    placeholder={Language.main.footerEmail.inputPlacehilder} />
                                <Button variant="contained"
                                    sx={{
                                        backgroundColor: "black",
                                        color: "whitesmoke",
                                        width: 1 / 3
                                    }}>
                                    {Language.main.footerEmail.buttonMembership}
                                </Button>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }, flexDirection: "column", alignItems: "end", gap: 3,
                            }} >
                                <Typography sx={{ fontSize: "2vw", textAlign: "end" }}>
                                    {Language.main.footerEmail.title}
                                </Typography>
                                <Typography sx={{
                                    fontSize: ".9rem",
                                    textAlign: "end",
                                    pl: dict.startsWith("en") ? 0 : 8
                                }}>
                                    {Language.main.footerEmail.caption}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Zoom>

        </>
    )
}

export default EmailBox