'use client';


//mui
import { useState } from 'react';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, Typography, Tooltip, Button, IconButton } from "@mui/material";
import { ArrowDropDown, Dashboard, Login, Settings, Logout } from '@mui/icons-material';

// image
import img from "@/src/assets/Alireza.jpg";
import Image from "next/image";
import Link from 'next/link';

// next auth
import { useSession } from "next-auth/react"
import { useSelector } from 'react-redux';
import { selectDictionary, selectSystemLanguage } from '@/store/slice/languageSlice';


export default function InforamtionUser() {

    const Language = useSelector((state) => selectSystemLanguage(state))


    // session next-auth
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            return null;
        }
    });


    // open & close menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        session?.user ? (
            <>
                <Box sx={{
                    display: 'flex', alignItems: 'center',
                    textAlign: 'center',
                    flexDirection: "column",
                    mt: .5
                }}>
                    <Tooltip title={Language.navbar.SignIn.tooltip} placement="left">
                        <IconButton
                            onMouseEnter={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ boxShadow: ".5px .5px 2px 1px orange" }}>
                                <Image src={img} width={40} />
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                    <ArrowDropDown sx={{ mr: -2, verticalAlign: "middle", my: -1.1, color: "orange" }} />
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                backgroundColor: "orange",
                                border: "1px solid black",
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 18.87,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'orange',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    sx={{ direction: "rtl", position: "fixed", boxShadow: 8 }}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Dashboard fontSize="small" />
                        </ListItemIcon>
                        <Typography >
                            {Language.navbar.SignIn.dashbord}
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        {Language?.navbar?.SignIn?.Settings}
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href={"/auth/logout"} style={{ color: "black" }}>
                            <Box sx={{ display: "flex" }}>
                                <ListItemIcon>
                                    <Logout fontSize="small" sx={{ pt: .3 }} />
                                </ListItemIcon>
                                <Typography>
                                    {Language?.navbar?.SignIn?.SignOut}
                                </Typography>
                            </Box>
                        </Link>
                    </MenuItem>
                </Menu>
            </>) : (
            <Link href={"/auth/login"}>
                <Button variant='contained' color='warning'>
                    <Typography color='black' variant='subtitle2'>
                        {Language?.navbar?.SignIn?.ButtonName}
                    </Typography>
                    <Login sx={{ color: "black", px: .5 }} />
                </Button>
            </Link>
        )
    )
}