

import { Box, Modal, useMediaQuery } from '@mui/material';


const CustModal = (props) => {

    const { children, openModal, setOpenModal } = props;


    const handleClose = () => setOpenModal(false);



    const modalStyle = {
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'black',
        boxShadow: 24,
        borderRadius: 10,
        width: "70%",
        border: "1px solid orange"
    };


    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropProps={{
                sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: "blur(6px)"
                },
            }}
        >
            <Box sx={modalStyle}>
                {children}
            </Box>
        </Modal>
    )
}

export default CustModal