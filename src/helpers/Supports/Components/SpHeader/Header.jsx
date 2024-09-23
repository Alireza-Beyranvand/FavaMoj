
import { Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { HeaderBoxStyle, TypographyStyle, IconStyle } from "./HeaderStyle";


const Header = ({ setStatusSwitch }) => {




    return (
        <>
            <Grid sx={HeaderBoxStyle}>
                <Typography sx={TypographyStyle}>
                    پشتیبانی انلاین
                </Typography>
                <ArrowBackIcon sx={IconStyle} onClick={() => setStatusSwitch(pre => !pre)} />
            </Grid>
        </>
    )
};

export default Header;