

import { Box, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2";
import EmailBox from "./EmailBox/EmailBox";
import SwitchingFooter from "./switchingFooter/SwitchingFooter";
import LogoEnum from "./section3/logoEnum/LogoEnum";
import Map from "./section3/map/Map";
import LastFooter from "./sectionLast/LastFooter";
import DividerTags from "./divider/DividerTags";



export default function Footer() {

    return (
        <>
            <Box sx={{ backgroundColor: "black", mt: 45, height: "120vh" }}>
                <EmailBox />
                <DividerTags />
                <SwitchingFooter />
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
                        <Map />
                    </Grid>
                </Grid>
                <Box>
                </Box>
                <Divider sx={{ borderColor: "#ec8d10" }} />
                <LastFooter />
            </Box >
        </>

    );
}
