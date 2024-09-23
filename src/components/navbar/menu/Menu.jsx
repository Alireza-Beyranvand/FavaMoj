'use client'


import { Box, Tooltip, Typography, Zoom } from "@mui/material";
import DrawerNavbar from '@/src/helpers/drawer/DrawerNavbar';
import { Home } from "@mui/icons-material";
import { dataNavbar } from "@/src/constants/NavbarData";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Menu = ({ openDrawer, setOpenDrawer }) => {


    const router = usePathname();  // استفاده از useRouter  

    const currentPath = router.pathname;

    // close when select Links

    const handleClose = () => setOpenDrawer(false);

    return (
        <>
            <DrawerNavbar openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer} >
                <Box sx={{ mt: 2 }}>
                    {dataNavbar && dataNavbar.map((nd, index) => (
                        <Zoom in style={{
                            transitionDelay: "210ms"
                        }}>
                            <Box key={index} sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <Link href={nd.links} onClick={handleClose}>
                                    <Typography variant="body1"
                                        sx={{
                                            backgroundColor: index === 3 ? "orange" : "null",
                                            borderRadius: 10,
                                            width: index === 3 ? 1 / 2 : 1,
                                            mx: "auto",
                                            mt: index === 3 ? 3 : 2.5,
                                            py: 1,
                                            color: index === 3 ? "black" :
                                                currentPath === nd.links ?
                                                    "whitesmoke" :
                                                    "warning.main"
                                        }}>
                                        {index === 3 ?
                                            <Tooltip title="home">
                                                <Home sx={{
                                                    verticalAlign: "middle",
                                                    fontSize: "2rem"
                                                }} />
                                            </Tooltip>
                                            : nd.title}
                                    </Typography>
                                </Link>
                            </Box>
                        </Zoom>

                    ))}
                </Box>
            </DrawerNavbar>
        </>
    )
}

export default Menu