"use client"

import { useEffect, useRef } from 'react';
import { Box, IconButton, Tooltip, } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchInput = ({ Language, dict }) => {

    // auto focus
    const input = useRef(null);

    useEffect(() => {
        input.current.focus();
    })

    const InputStyle = {
        width: "80%",
        color: "orange",
        backgroundColor: "transparent",
        direction: dict.startsWith("en") ? "ltr" : "rtl",
        border: "none",
        outline: "none",
        padding: "1.1rem",
        fontSize: "1rem",
        fontFamily: "Vazir",
        marginRight: ".7rem",
        marginLeft: dict.startsWith("en") ? "2rem" : 0,
    }

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            <Tooltip title="search">
                <IconButton sx={{
                    ml: {
                        xs: 1,
                        md: 2.5
                    },
                    mr: dict.startsWith("en") ? 3 : -3,
                }}>
                    <Search sx={{
                        fontSize: "2.3rem",
                        my: "auto",
                        color: "warning.main"
                    }} />
                </IconButton>
            </Tooltip>
            <input style={InputStyle} ref={input}
                placeholder={Language.navbar.searchBox} />
        </Box>
    )
}

export default SearchInput;