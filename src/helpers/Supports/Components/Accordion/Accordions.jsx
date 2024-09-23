
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade'
import { Typography } from '@mui/material';
// texts
import { headerAccordions, ContentAccrdion } from "./AcText"


const Accordions = () => {


    // switch open/close
    const [expanded, setExpanded] = useState({});

    const handleExpansion = (index) => {
        setExpanded((prevExpanded) => {
            return { ...prevExpanded, [index]: !prevExpanded[index] };
        });
    };

    return (
        <>
            {headerAccordions.map((element, index) => (
                <Accordion
                    key={index}
                    expanded={!!expanded[index]}
                    onChange={() => handleExpansion(index)}
                    TransitionComponent={Fade}
                    sx={{
                        '& .MuiAccordion-region': { height: expanded[index] ? 'auto' : 0 },
                        boxShadow: "none",
                        border: "1px solid silver",
                        borderRadius: ".5rem",
                        mt: 1,
                        backgroundColor: "black",
                        color: "#ec8d10"
                    }}
                >
                    <AccordionSummary
                        sx={{ textAlign: "center" }}
                        expandIcon={<ExpandMoreIcon sx={{ color: "warning.main" }} />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography sx={{
                            fontWeight: 900,
                            lineHeight: "2rem",
                            textAlign: 'start',
                            my: .15,
                            fontSize: element.length > 37 ? ".9rem" : "1rem"
                        }}>
                            {element}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ lineHeight: "2rem" }}>
                            {ContentAccrdion[index]}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
};

export default Accordions;