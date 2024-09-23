
'use client'


import { createTheme } from "@mui/material/styles";

export const theme = () =>
    createTheme({
        palette: {
            primary: {
                main: "#007bff"
            },
            whitesmoke: {
                main: "#f5f5f5"
            },
            dark: {
                main: "#000000"
            }
        },
        typography: {
            fontFamily: "Vazir"
        },
        components: {
            MuiTextField: {
                defaultProps: {
                    InputLabelProps: {
                        style: {
                            textAlign: "right",
                            width: "100%",
                            color: "white"
                        },
                    },
                    InputProps: {
                        sx: {
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'orange',
                                    outline: "none"
                                },
                                '&:hover fieldset': {
                                    borderColor: 'orange',
                                    outline: "none"
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'orange',
                                    outline: "none"
                                },
                            },
                            color: 'black',
                        },
                    },
                },
            },
        },
    });
