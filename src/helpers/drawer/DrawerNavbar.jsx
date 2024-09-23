
import { Box, Drawer } from "@mui/material";



const DrawerNavbar = ({ openDrawer, setOpenDrawer, children }) => {

    const handleClose = () =>
        setOpenDrawer(false)

    return (
        <Drawer open={openDrawer} anchor="top" onClose={handleClose} sx={{ mt: 10 }}>
            <Box role="presentation" sx={{
                height: "19rem",
                backgroundColor: "black",
                color: "whitesmoke",
                textAlign: "center",
                boxShadow: 10
            }}>
                {children}
            </Box>
        </Drawer>
    )
}

export default DrawerNavbar;