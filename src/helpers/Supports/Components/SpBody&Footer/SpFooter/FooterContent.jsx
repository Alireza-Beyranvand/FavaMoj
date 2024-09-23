
import { Box, Typography, Button } from '@mui/material';
import { KeyboardArrowLeft } from '@mui/icons-material';
import {
    FooterBoxStyle, TypographyStyle1
    , ButtonStyle, IconArrowStyle
} from "./FooterStyle";


const FooterContent = () => {


    return (
        <>
            <Box sx={FooterBoxStyle}>
                <Typography sx={TypographyStyle1}>
                    جواب سوالتون رو پیدا نکردید؟
                </Typography>
                <Button variant='contained' sx={ButtonStyle}>
                    ارسال پیام به پشتیبان
                    <KeyboardArrowLeft sx={IconArrowStyle} />
                </Button>
            </Box>
        </>
    )
};

export default FooterContent;