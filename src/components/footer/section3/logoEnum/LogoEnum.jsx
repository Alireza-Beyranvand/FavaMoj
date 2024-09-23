'use server'

import Grid from "@mui/material/Grid2";
import { img1, img2, img3, } from "@/src/assets/enum/index";

import Image from "next/image";

const LogoEnum = () => {

    //  enum
    const image = [img1, img2, img3];

    return (
        <>

            <Grid size={{
                xs: 12,
                lg: 6
            }} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: {
                    xs: 1,
                    md: 5.5
                },
                mt: {
                    xs: -2,
                    md: 4
                }
            }}>
                {
                    image && image.map((img, index) => (
                        <Image key={index}
                            src={img}
                            width={100}
                            height={"90"}
                            style={{
                                backgroundColor: "#E5E5E5",
                                borderRadius: ".8rem",
                                padding: "2vw",
                            }}
                        />
                    ))
                }
            </Grid>

        </>
    )
}

export default LogoEnum