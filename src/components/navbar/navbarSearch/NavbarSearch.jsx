'use client'

import { useState } from "react";
import { IconButton, Tooltip } from '@mui/material';
import { Search } from '@mui/icons-material';
// components
import CustModal from "@/src/common/Modal/CustModal";
import SearchInput from "./Input/SearchInput";
import { useSelector } from "react-redux";
import { selectDictionary, selectSystemLanguage } from "@/store/slice/languageSlice";

const NavbarSearch = () => {


    const dict = useSelector((state) => selectDictionary(state))
    const Language = useSelector((state) => selectSystemLanguage(state))




    //for Open Modal
    const [openModal, setOpenModal] = useState(false);

    //open Modal
    const handleOpen = () => setOpenModal(true);


    return (
        <>
            <IconButton
                color='whitesmoke'
                onClick={handleOpen}
                sx={{
                    transform: "scale(1)",
                    backgroundColor: "warning.main",
                    mr: {
                        xs: 3,
                        sm: -3,
                        md: 1
                    },

                    mx: {
                        xs: .8,
                        md: 1
                    },
                    ":hover": {
                        backgroundColor: "warning.main",
                        transform: "scale(1.1)",
                    }
                }}>
                <Tooltip title="search">
                    <Search
                        sx={{
                            verticalAlign: "middle",
                            color: "black",
                        }} />
                </Tooltip>
            </IconButton>
            <CustModal
                openModal={openModal}
                setOpenModal={setOpenModal}>
                <SearchInput Language={Language} dict={dict} />
            </CustModal>
        </>
    )
}

export default NavbarSearch;