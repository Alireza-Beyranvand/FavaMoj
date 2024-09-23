'use server'


import { Box } from "@mui/material"
import FooterPc from "./pc/FooterPc";
import FooterMobile from "./mobile/FooterMobile";

const SwitchingFooter = ({ Language, dict }) => {


  return (
    <>
      <Box sx={{
        display: {
          xs: "none",
          md: "block"
        },
      }}>
        <FooterPc Language={Language} dict={dict} />
      </Box>
      <Box sx={{
        display: {
          xs: "block",
          md: "none"
        }, mt: 5
      }}>
        <FooterMobile Language={Language} dict={dict} />
      </Box>
    </>
  )
}

export default SwitchingFooter