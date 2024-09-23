

import { Box, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2";
import EmailBox from "./EmailBox/EmailBox";
import SwitchingFooter from "./switchingFooter/SwitchingFooter";
import LogoEnum from "./section3/logoEnum/LogoEnum";
import Map from "./section3/map/Map";
import LastFooter from "./sectionLast/LastFooter";




export default function Footer({ Language, dict }) {

    return (
        <>
            <Box sx={{ backgroundColor: "black", mt: 45, height: "120vh" }}>
                {/* box email */}
                <EmailBox Language={Language} dict={dict} />
                <Box >
                    <Divider
                        sx={{
                            "&::before , &::after": {
                                borderColor: "#ec8d10"
                            }
                        }} >
                        <Typography sx={{
                            backgroundColor: "warning.main",
                            color: "black", px: 3, py: 1, borderRadius: 5
                        }}>
                            {Language.main.label}
                        </Typography>
                    </Divider>
                </Box>
                {/* swichin footer when responsiv for mobile */}
                <SwitchingFooter Language={Language} dict={dict} />
                <Divider sx={{
                    borderColor: "#ec8d10",

                }} />
                <Grid container sx={{
                    pb: 9,
                    justifyContent: "space-between",
                    backgroundColor: "black",
                    gap: {
                        xs: 4,
                        md: 0
                    },
                    pt: {
                        xs: 6,
                        md: 0
                    }
                }}>
                    {/* enum logo */}
                    <LogoEnum />
                    <Grid size={{
                        xs: 12,
                        lg: 6
                    }} sx={{
                        width: 1,
                        pt: 6,
                        pb: {
                            xs: 8,
                            md: 0
                        }
                    }}>
                        {/* Google Map */}
                        <Map />
                    </Grid>
                </Grid>
                <Box>
                </Box>
                <Divider sx={{
                    borderColor: "#ec8d10",
                }} />
                <LastFooter Language={Language} dict={dict} />
            </Box >
        </>

    );
}
