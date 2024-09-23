'use server';


import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
// components
import Section1 from "@/src/components/pages/main/section1/Section1";
import SocialMedia from "@/src/components/pages/main/section2/SocialMedia";
import ShowTags from "@/src/components/pages/main/section3/ShowTags";
import selectLanguages from "./setLanguage";
import Image from "next/image";


// metaData
export async function generateMetadata({ params }) {
  return {
    title: params.Languages.startsWith("en") ? "FavaMoj | MainPage" : "فاواموج | صفحه اصلی "
  }
};




//session
import InforamtionUser from "@/src/InformationUser/InforamtionUser";



export default async function Home({ params }) {

  // select and send package (Language) to componens as props
  const Language = await selectLanguages(params.Languages);
  const dic = params.Languages;



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
          {/* Section1 (image and introduction Company) */}
          <Section1 Language={Language} dic={dic} />
        </Grid>
        <Box sx={{ pt: { xs: 11, md: 28 } }}>
          {/* show socailMedia and animations */}
          <SocialMedia Language={Language} dic={dic} />
        </Box>
        <ShowTags Language={Language} dic={dic} />
      </Box>
    </>

  );
};
