'use client';

import { selectSystemLanguage } from '@/store/slice/languageSlice'
import { Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function DividerTags() {
    const Language = useSelector((state) => selectSystemLanguage(state))
    return (
        <Box>
            <Divider
                sx={{
                    "&::before , &::after": {
                        borderColor: "#ec8d10"
                    }
                }} >
                <Typography sx={{
                    backgroundColor: "warning.main",
                    color: "black", px: 3, py: 1, borderRadius: 5
                }}>
                    {Language?.main?.label}
                </Typography>
            </Divider>
        </Box>
    )
}
