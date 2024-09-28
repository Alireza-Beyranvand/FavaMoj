

import { selectSystemLanguage } from "@/store/slice/languageSlice";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Avatar, Button, Tooltip, Typography } from "@mui/material";

import Link from "next/link";
import { useSelector } from "react-redux";


const CartButton = () => {

    const Language = useSelector((state) => selectSystemLanguage(state))

    return (
        <>
            <Link href='/shop' target="_blank" rel="noopener noreferrer">
                <Tooltip title="shop">
                    <Button variant='contained'
                        sx={{
                            borderRadius: 10,
                            backgroundColor: "warning.main",
                            boxShadow: {
                                xs: 0,
                                lg: 10
                            },
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        }}>
                        <Avatar
                            className="cart-icon"
                            sx={{
                                backgroundColor: {
                                    xs: "warning.main",
                                    sm: "black"
                                }
                            }}>
                            <ShoppingCartOutlined sx={{
                                color: {
                                    xs: "black",
                                    sm: "warning.main"
                                }
                            }} />
                        </Avatar>
                        <Typography color="black" variant="subtitle1" sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            },
                            fontWeight: 900,
                            mx: .9,
                            mt: .4
                        }}>
                            {Language?.navbar?.buttonShop}
                        </Typography>
                    </Button>
                </Tooltip>
            </Link>
        </>
    )
}

export default CartButton;