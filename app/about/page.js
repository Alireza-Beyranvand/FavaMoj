'use server'

import { Box, Chip, Divider, Typography, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Slick from "./Slick";
import baner from "@/src/assets/COMPANY PROFILE.png"
import { Person } from "@mui/icons-material";
import Image from "next/image";
import SlickMobile from "./SlickMobile";
import { options } from "@/src/constants/aboutData";
import { cookies } from "next/headers";
import DividerChip from "@/src/common/DividerChip/DividerChip";

export async function generateMetadata() {
    const cookie = cookies();
    const cookieLang = cookie?.get("Language");
    return {
        title: cookieLang?.value === "en-us" ? "about us" : " فاواموج | درباره ما "
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
                    <DividerChip title={"dividerChip1"} pageName={"about"} icon={true} />
                    <Slick options={options} />
                    <SlickMobile options={options} />
                    <DividerChip title={"dividerChip2"} pageName={"about"} icon={true} />
                    <Slick options={options} />
                    <SlickMobile options={options} />
                </Box>
            </Box>
        </>
    )
};