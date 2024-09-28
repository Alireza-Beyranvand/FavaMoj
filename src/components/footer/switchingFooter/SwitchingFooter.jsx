'use server'


import { Box } from "@mui/material"
import FooterPc from "./pc/FooterPc";
import FooterMobile from "./mobile/FooterMobile";

const SwitchingFooter = () => {


  return (
    <>
      <Box sx={{
        display: {
          xs: "none",
          md: "block"
        },
      }}>
        <FooterPc />
      </Box>
      <Box sx={{
        display: {
          xs: "block",
          md: "none"
        }, mt: 5
      }}>
        <FooterMobile />
      </Box>
    </>
  )
}

export default SwitchingFooter