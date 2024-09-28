'use client'

import { Box, Button, Tooltip } from "@mui/material";
import { Menu } from "@mui/icons-material"
import logo from "@/src/assets/logo.png";
import Image from "next/image";


const LogoAndMenu = ({ setOpenDrawer }) => {


  return (
    <>
      <Box sx={{
        display: "flex",
        justifyContent: "end",
      }}>
        <Tooltip title="www.favamoj.ir" arrow>
          <Box component="div" sx={{
            mx: {
              xs: "auto",
              md: 1
            },
          }} >
            <Image src={logo} width={50} height={60} />
          </Box>
        </Tooltip>
        <Button
          onClick={() => setOpenDrawer(pre => !pre)}
          sx={{
            p: 0,
            display: {
              xs: "flex",
              md: "none"
            },
          }}>
          <Menu
            sx={{
              verticalAlign: "middle",
              ml: 1,
              backgroundColor: "warning.main",
              color: "black",
              p: .9,
              borderRadius: 6,
              mb: .2
            }} />
        </Button>
      </Box>

    </>
  )
}

export default LogoAndMenu;