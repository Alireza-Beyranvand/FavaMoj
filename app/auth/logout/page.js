'use client';

import { Box, Button, Modal, Typography } from "@mui/material"
import { signOut } from "next-auth/react";


export default function LogOut() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'orange',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: 6,
        p: 4,
        textAlign: "center"
    };


    return (
        <>

            <Modal
                open
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: "blur(6px)"
                    },
                }}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        خروج از حساب کاربری؟
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 4, display: "flex", gap: 3, justifyContent: "center" }}>
                        <Button variant="contained" color="warning" onClick={() => signOut({ callbackUrl: "/" })}>
                            اره
                        </Button>
                        <Button variant="outlined" onClick={() => window.history.back()}>
                            نه
                        </Button>
                    </Box>
                </Box>
            </Modal>

        </>
    )
};