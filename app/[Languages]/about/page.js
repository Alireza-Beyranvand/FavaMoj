'use server'

import { Box, Chip, Divider, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Slick from "./Slick";
import baner from "@/src/assets/COMPANY PROFILE.png"
import { Person } from "@mui/icons-material";
import Image from "next/image";
import SlickMobile from "./SlickMobile";
import { options } from "@/src/constants/aboutData";

export async function generateMetadata() {
    return {
        title: "درباره ما"
    }
}


export default async function About() {

    return (
        <>
            <Box sx={{ px: 3 }}>
                <Box sx={{
                    width: 1,
                    flexDirection: "column",
                    display: "flex",
                    gap: 10,
                }}>
                    <Grid container sx={{
                        display: "flex", flexWrap: {
                            xs: "none",
                            lg: "nowrap"
                        }, gap: 2
                    }}>
                        <Grid size={{
                            xs: 12,
                            lg: 9
                        }} sx={{ width: 1 }}>
                            <Grid>
                                <Image src={baner}
                                    style={{
                                        width: "100%",
                                        borderRadius: ".8rem", maxWidth: "100rem",
                                        minHeight: "8rem", maxHeight: "37vh", objectFit: "cover",
                                    }} alt="" />
                            </Grid>
                        </Grid>
                        <Grid size={{
                            xs: 12,
                            lg: 3
                        }} sx={{
                            display: "flex", flexDirection: {
                                xs: "row",
                                lg: "column"
                            }, gap: .5
                        }}>
                            <Grid size={6} sx={{ width: 1 }}>
                                <Image src={baner}
                                    style={{
                                        width: "100%",
                                        borderRadius: ".8rem", maxWidth: "100rem",
                                        maxHeight: "17.95vh",
                                        objectFit: "cover",
                                    }} alt="" />
                            </Grid>
                            <Grid size={6} sx={{ width: 1 }}>
                                <Image src={baner}
                                    style={{
                                        width: "100%",
                                        borderRadius: ".8rem", maxWidth: "100rem",
                                        maxHeight: "17.95vh",
                                        objectFit: "cover",
                                    }} alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider sx={{
                        pt: 4, "&::before , &::after": {
                            borderColor: "warning.main"
                        }
                    }}>
                        <Chip label={
                            <Typography color="black" sx={{ fontSize: "3vh" }}>
                                <Person sx={{
                                    fontSize: "5vh",
                                    color: "black",
                                    verticalAlign: "middle",
                                    pr: 1
                                }} />
                                مدیران
                            </Typography>
                        } variant="filled"
                            color="warning"
                            sx={{ px: "3vh", py: 4 }} />
                    </Divider>
                    <Slick options={options} />
                    <SlickMobile options={options} />
                    <Divider sx={{
                        pt: {
                            xs: 0,
                            md: 8
                        }, "&::before , &::after": {
                            borderColor: "warning.main"
                        }
                    }}>
                        <Chip label={
                            <Typography color="black" sx={{ fontSize: "3vh" }}>
                                <Person sx={{
                                    fontSize: "5vh",
                                    color: "black",
                                    verticalAlign: "middle",
                                    pr: 1
                                }} />
                                پرسنل
                            </Typography>
                        } variant="filled"
                            color="warning"
                            sx={{ px: "3vh", py: 4 }} />
                    </Divider>
                    <Slick options={options} />
                    <SlickMobile options={options} />
                </Box>
            </Box>
        </>
    )
};