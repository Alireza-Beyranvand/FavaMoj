'use client'


import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";


export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    });

    return (
        <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ textAlign: "center" }}>
                وای 😨 مشکلی پیش اومده دوست من !
            </Typography>
            <Button variant="contained"
                color="primary"
                sx={{ textAlign: "center" }}
                onClick={() => reset()}>
                دوباره امتحان کنید
            </Button>
        </Box>
    )
};