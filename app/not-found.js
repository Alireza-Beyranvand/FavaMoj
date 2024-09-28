import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"


export default function NotFound() {

    return (
        <Box sx={{ textAlign: "center", }}>
            <Box sx={{ textAlign: "center", mt: 50 }}>
                <Typography variant="h4" color="whitesmoke" sx={{ mt: 3 }}>
                    چنین صفحه ایی وجود نداره دوست من😊
                </Typography>

            </Box>
            <Box sx={{ mt: 10 }}>
                <Button variant="contained" color="warning" >
                    <Link href="/" style={{ color: "black" }}>
                        بازگشت به خانه
                    </Link>
                </Button>
            </Box>
        </Box>
    )
}