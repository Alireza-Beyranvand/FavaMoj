
import { Instagram, Telegram, LinkedIn, Twitter, Pinterest } from "@mui/icons-material";


export const socialMedia = [
    {
        name: "instargram",
        url: "#ins",
        icon: <Instagram sx={{
            verticalAlign: "middle", fontSize: {
                xs: "4.5vh",
                md: "5.5vh"
            },
            color: "black"
        }} />,
        color: "warning"
    },
    {
        name: "telegram",
        url: "#tel",
        icon: <Telegram sx={{
            verticalAlign: "middle", fontSize: {
                xs: "4.5vh",
                md: "5.5vh"
            },
            color: "black"
        }} />,
        color: "warning"
    },
    {
        name: "linkedIn",
        url: "#link",
        icon: <LinkedIn sx={{
            verticalAlign: "middle", fontSize: {
                xs: "4.5vh",
                md: "5.5vh"
            },
            color: "black"
        }} />,
        color: "warning"
    },
    {
        name: "twitter",
        url: "#tw",
        icon: <Twitter sx={{
            verticalAlign: "middle", fontSize: {
                xs: "4.5vh",
                md: "5.5vh"
            },
            color: "black"
        }} />,
        color: "warning"
    },
    {
        name: "pinterest",
        url: "#pi",
        icon: <Pinterest sx={{
            verticalAlign: "middle", fontSize: {
                xs: "4.5vh",
                md: "5.5vh",
                color: "black"
            }
        }} />,
        color: "warning"
    },
];