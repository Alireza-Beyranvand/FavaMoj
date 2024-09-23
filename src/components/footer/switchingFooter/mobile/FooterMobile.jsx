'use client'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import {
  Call,
  LocationOn,
  QueryBuilder
} from "@mui/icons-material";
import logo from "@/src/assets/logo.png";
import Link from "next/link";
import Image from "next/image";


export default function FooterXs({ Language }) {

  return (
    <Box>
      {
        Language.main.informationFooter && Language.main.informationFooter.map((fd, indexAll) => (
          <Accordion sx={{
            mt: 1, direction: "rtl", color: "black",
            backgroundColor: "#ec8d10", border: "1px solid red"
          }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id={`panel${indexAll}-header`}

            >
              <Typography variant="h6" sx={{ fontWeight: "900" }}>
                {fd.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start", gap: 2
            }}>
              {fd && fd.items.map((fi, index) => (
                <Button key={index} sx={{ mx: .5 }} >
                  <Link href={fd && fd.links[index]}>
                    <Typography
                      variant="body1"
                      sx={{ color: "black" }}>
                      - &nbsp;{fi}
                    </Typography>
                  </Link>
                </Button>
              ))}
            </AccordionDetails>
          </Accordion>
        ))
      }

      <Grid container
        sx={{
          direction: "rtl",
          mt: 5,
          backgroundColor: "black", pb: 2,
        }}>
        <Grid size={12}
          sx={{ display: "flex", justifyContent: "center" }} >
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2
          }}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start"
            }}>
              <Image src={logo} width={50} style={{ paddingLeft: ".5rem" }} />
              <Typography color="warning" sx={{ fontSize: "1.4rem" }}>
                فاواموج الکترونیک
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around"
            }}>
              <LocationOn color="warning" sx={{ mr: 1.5 }} />
              <Typography color="warning" sx={{ fontSize: "1rem" }}>
                خرم اباد - خیابان 22 بهمن - جهاد
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3, pt: 1 }}>
              <Call color="warning" sx={{ mr: 1.5, }} />
              <Typography color="warning" sx={{ fontSize: "1.2rem" }}>
                0663-123456
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 4, pt: 1 }}>
              <QueryBuilder color="warning" sx={{ mr: 1.5, }} />
              <Typography color="warning" sx={{ fontSize: "1.2rem" }}>
                9 - 13
              </Typography>
            </Box>
          </Box>
        </Grid >
      </Grid>
    </Box>
  )
};