'use client'


import Slider from "react-slick";
import bg from "@/src/assets/background.jpg";
import { Avatar, Box, Card, CardMedia, Chip, Divider, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";



const SlickMobile = ({ options }) => {

    // responsive
    const showSlick = useMediaQuery('(max-width:600px)');

    const [show, setShow] = useState(false)


    useEffect(() => {
        setShow(showSlick)
    }, [showSlick])


    // settings slick

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };



    return (
        show ? (
            <Box sx={{ px: 1 }}>
                <Slider {...settings}>
                    {
                        options && options.map((opt, index) => (
                            <Box key={index}>
                                <Card sx={{
                                    mx: 3.2,
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: "warning.main",
                                    textAlign: "center",
                                    gap: 3,
                                    borderRadius: 5,
                                    mb: 4.5,
                                    boxShadow: 10
                                }}>
                                    <CardMedia>

                                        <Avatar src={bg} variant="rounded"
                                            sx={{
                                                width: 1,
                                                height: "15rem",
                                                mx: "auto"
                                            }} />
                                    </CardMedia>

                                    <Box>
                                        <Divider sx={{
                                            "&::after , &::before": {
                                                borderColor: "black"
                                            }
                                        }}>
                                            <Chip label={
                                                <Typography variant="h6" color="warning">
                                                    {opt.name}
                                                </Typography>
                                            } sx={{ p: 2, backgroundColor: "black" }} />

                                        </Divider>
                                    </Box>
                                    <Chip label={
                                        <Typography variant="body1" color="black">
                                            {opt.job}
                                        </Typography>
                                    } sx={{ p: 2 }} />
                                </Card>
                            </Box>
                        ))
                    }
                </Slider>
            </Box>

        ) : (null)

    )
}

export default SlickMobile