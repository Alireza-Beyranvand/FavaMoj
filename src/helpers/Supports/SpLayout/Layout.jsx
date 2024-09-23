
import { Box } from '@mui/material';

import Body from "../Components/SpBody&Footer/SpBody/Body";
import Header from "../Components/SpHeader/Header";


const Layout = ({ statusSwitch, setStatusSwitch }) => {

    // select State for Condition Render

    const ContentBoxStyle = {
        position: "fixed", top: "16%", left: "4%", bgcolor: "black"
        , width: 360, height: "70.5%", borderRadius: 4, pr: .1, pl: .1, zIndex: "2", mt: .5,
        border: "1px solid orange"
    }

    return (
        <>
            {statusSwitch ? (
                <Box sx={ContentBoxStyle}>
                    <Header setStatusSwitch={setStatusSwitch} />
                    <Body />
                </Box>
            ) : null}
        </>
    )
};

export default Layout;