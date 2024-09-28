'use client'

import { Avatar, Box, Card, Chip, Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import bg from "@/src/assets/background.jpg";



const Slick = ({ options }) => {


    // responsive
    const showSlick = useMediaQuery('(max-width:600px)');


    // division
    const totalSlides = Math.ceil(options.length / 3);
    const division = Array.from({ length: totalSlides }, (_, index) => index);


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
        !showSlick ? (<Box sx={{ width: "78vw", mx: "auto", pt: 8 }}>
            <Slider {...settings}>
                {
                    division.map((_, index) => (
                        <Box key={index} >
                            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                {
                                    options.slice(index * 3, index * 3 + 3).map((op, index2) => (
                                        <Card
                                            key={index2}
                                            sx={{
                                                mx: 3,
                                                display: "flex",
                                                flexDirection: "column",
                                                backgroundColor: "warning.main",
                                                width: "15rem",
                                                textAlign: "center",
                                                gap: 3,
                                                borderRadius: 5,
                                                mb: 4.5,
                                                boxShadow: 10
                                            }}
                                        >
                                            <Avatar
                                                src={bg}
                                                variant="rounded"
                                                sx={{
                                                    width: 1,
                                                    height: "15rem",
                                                    mx: "auto",
                                                }}
                                            />
                                            <Box>
                                                <Chip
                                                    label={
                                                        <Typography variant="h6">
                                                            {op.name}
                                                        </Typography>
                                                    }
                                                    sx={{ p: 2 }}
                                                />
                                            </Box>
                                            <Box>
                                                <Typography>
                                                    {op.job}
                                                </Typography>
                                            </Box>
                                        </Card>
                                    ))}
                            </Box>
                        </Box>
                    ))
                }
            </Slider>
        </Box>) : (null)

    );
}

export default Slick;  