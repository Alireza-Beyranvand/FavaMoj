
import Fab from '@mui/material/Fab';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Close as CloseIcon } from '@mui/icons-material';


const BtnOpen = ({ statusSwitch, setStatusSwitch }) => {


    const FabStyle = {
        bgcolor: "warning.main",
        ":hover": { bgcolor: "#ec8d10" }, position: "relative", zIndex: "0",
    }



    const iconOpenStyle = {
        color: "black",
        fontSize: "1.5rem",
        display: statusSwitch ? "none" : "inline"
    }

    const iconCloseStyle = {
        color: "black",
        fontSize: "1.4rem",
        display: statusSwitch ? "inline" : "none"
    }

    return (
        <>
            <Fab size='medium' onClick={() =>
                setStatusSwitch(pre => !pre)} sx={FabStyle}>
                <HeadsetMicIcon sx={iconOpenStyle} />
                <CloseIcon sx={iconCloseStyle} />
            </Fab>
        </>
    )
};

export default BtnOpen;