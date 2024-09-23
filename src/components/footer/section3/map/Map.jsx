'use server'

import { Box } from '@mui/material'

const Map = () => {
    return (
        <>
            <Box sx={{
                width: {
                    xs: "98.9%",
                    md: "100%",
                    lg: "98%"
                }
            }}>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d572.7518791858123!2d51.40526141510938!3d35.70225984184251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2sus!4v1725691684456!5m2!1sfa!2sus"
                    width="100%" height="180vh"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    style={{ borderRadius: ".8rem", }}></iframe>
            </Box>

        </>
    )
}

export default Map