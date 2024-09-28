'use server';


import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
// components
import Section1 from "@/src/components/pages/main/section1/Section1";
import SocialMedia from "@/src/components/pages/main/section2/SocialMedia";
import ShowTags from "@/src/components/pages/main/section3/ShowTags";
import selectLanguages from "./setLanguage";
import { cookies } from "next/headers";
import InstallButton from "./InstallButton";


export async function generateMetadata() {
  const cookie = cookies();
  const cookieLang = cookie?.get("Language");
  return {
    title: cookieLang?.value === "en-us" ? "main page | FavaMoj" : " فاواموج | صفحه اصلی "
  }
}


export default async function Home() {

  return (
    <>
      <Box sx={{
        background: "transparent",
        mx: 3, mt: { xs: "20vh", md: "27.5vh", xl: "26vh" }
      }}>
        <Grid container
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}>
          <Section1 />
        </Grid>
        <Box sx={{ pt: { xs: 11, md: 28 } }}>
          <SocialMedia />
        </Box>
        <InstallButton />
        <ShowTags />
      </Box>
    </>

  );
};
