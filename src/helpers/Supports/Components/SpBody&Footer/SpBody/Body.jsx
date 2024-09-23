

import { Box, Grid, Typography } from '@mui/material';
import { BoxBodyStyle, GridBodyStyle1, TypographyStyle2 } from "./BodyStyle";

import Accordions from "../../Accordion/Accordions";
import FooterContent from "../SpFooter/FooterContent";


const Body = () => {


    return (
        <>

            <Box sx={BoxBodyStyle}>
                <Grid sx={GridBodyStyle1}>
                    <Typography variant='h6'
                        sx={{
                            letterSpacing: "-.13rem",
                            color: "black",
                            textAlign: "center"
                        }}>
                        سلام 👋👋
                    </Typography>
                    <Typography sx={TypographyStyle2}>
                        اینجا می‌توانید تعدادی از پرسش های متداول را ببینید<br /> یا در صورت تمایل با ما گفتگو کنید!
                    </Typography>
                </Grid>
                <Grid>
                    {/* Accordions */}
                    <Accordions />
                    {/* footer */}
                    <FooterContent />
                </Grid>
            </Box>
        </>
    )
};

export default Body;