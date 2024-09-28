

import { Box, Modal } from "@mui/material";



export default async function Loading() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'trasparent',
        p: 4,
        ":focus": {
            outline: "none"
        }
    };
    return (
        <Modal
            open={true}
            aria-labelledby="modal-modal-loader"
            aria-describedby="modal-modal-loader"
            BackdropProps={{
                sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: "blur(90px)"
                },
            }}
        >
            <Box sx={style}>
                <div class="loader"></div>
            </Box>
        </Modal>

    )
};