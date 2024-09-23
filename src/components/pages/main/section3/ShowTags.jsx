'use client'

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Typography,
    Zoom,
} from '@mui/material'
import Grid from "@mui/material/Grid2";
import { dataTagsIcon } from "../../../../constants"
import { NorthWest } from '@mui/icons-material';
import { useInView } from "react-intersection-observer";
import Link from 'next/link';


const ShowTags = ({ Language, dic }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .25
    })

    return (
        <Box ref={ref}>
            <Grid container>
                <Divider sx={{
                    mt: {
                        xs: 18,
                        md: 29
                    }, "&::before , &::after": {
                        border: "2px dashed #ec8d10"
                    }, width: 1,
                }}>
                    <Chip variant="filled" label={
                        <Typography color="warning" sx={{
                            fontSize: {
                                xs: "1rem",
                                md: "2.5rem"
                            },
                            textShadow: "1.5px 1.5px 2px grey"
                        }}>
                            🧐 {Language.main.section3} 🧐
                        </Typography>
                    } sx={{
                        py: {
                            xs: "6vw",
                            md: "3.5rem"
                        }, backgroundColor: "black", boxShadow: 10
                    }} />
                </Divider>

            </Grid>
            <Grid container sx={{
                mt: 10,
                px: 2,
                borderRadius: 8, display: "flex",
                justifyContent: "space-around",
            }}>

                {Language.main.tages && Language.main.tages.map((dt, index) => (

                    <Zoom in={inView} ref={ref} style={{
                        transitionDelay: `${index + 4}90ms`
                    }}>
                        <Grid size={{ xs: 12, md: 4, }} sx={{ mt: 3, }} key={index}>
                            <Card sx={{
                                mx: {
                                    xs: -1,
                                    md: 1
                                },
                                textAlign: "center", backgroundColor: "black",
                                borderRadius: 6,
                                // boxShadow: "2px 2px 8px orange , -.5px -.5px 1px #fcb724"
                                border: "1px solid #ec8d10",
                                boxShadow: 12
                            }} >
                                <CardMedia sx={{ mb: 2 }}>
                                    {dataTagsIcon[index]}
                                </CardMedia>
                                <Divider sx={{ color: "red" }} />
                                <CardContent>
                                    <Divider sx={{
                                        "&::before , &::after": {
                                            borderColor: "orange"
                                        },
                                    }}>
                                        <Chip variant="filled" color='warning' label={
                                            <Typography sx={{ fontSize: "2vh" }}
                                                color="black"
                                            >
                                                {dt.title}
                                            </Typography>
                                        } sx={{
                                            boxShadow: "1px 1px 2px orange"
                                        }} />
                                    </Divider>

                                    < Typography color="whitesmoke" sx={{ mt: 3.5, wordBreak: "inherit" }} variant='body2'>
                                        {dt.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' color="warning"
                                        sx={{
                                            mx: "auto", mb: 1, boxShadow: 10, px: {
                                                xs: 2,
                                                md: "none"
                                            },
                                            border: "1px solid orange",
                                            borderRadius: 8
                                        }}>
                                        <Link href={dt.url} target='_blank'>
                                            <Typography color="warning.main" >
                                                {dt.name ? (`${dic.startsWith("en") ?
                                                    "login to shop" : "ورود به فروشگاه "} ${dt.name} `) :
                                                    `${dic.startsWith("en") ?
                                                        "Go to portfolio developer" : "رفتن به سایت یرنامه نویس"}`}
                                                <NorthWest sx={{ verticalAlign: "middle" }} />
                                            </Typography>
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid >
                    </Zoom>

                ))}
            </Grid>
        </Box>
    )
}

export default ShowTags