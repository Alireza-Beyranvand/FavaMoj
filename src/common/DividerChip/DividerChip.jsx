'use client'


import { selectSystemLanguage } from '@/store/slice/languageSlice'
import { Person } from '@mui/icons-material'
import { Chip, Divider, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function DividerChip({ title, pageName, icon, divider, chipVariant, textColor, chipColor }) {

    const Language = useSelector((state) => selectSystemLanguage(state))

    return (
        <>
            <Divider sx={{
                pt: 4, "&::before , &::after": divider ? {
                    borderColor: "warning.main"
                } : null,
            }}>
                <Chip label={
                    <Typography color={textColor} sx={{ fontSize: "3vh" }}>
                        <Person sx={{
                            fontSize: "5vh",
                            color: "black",
                            verticalAlign: "middle",
                            pr: 1,
                            display: icon ? "inline" : "none",
                        }} />
                        {Language?.[pageName]?.[title]}
                    </Typography>
                } variant={chipVariant ? chipVariant : "filled"}
                    sx={{
                        px: "3vh", py: 4, boxShadow: 15,
                        backgroundColor: chipColor ?
                            chipColor : "warning.main"
                    }} />
            </Divider>
        </>
    )
}
