import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import * as React from "react";

import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

function FAQSection() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const FAQ = [
    {
      title: "Can I see who reads my email campaigns?",
      text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
    {
      title: "Do you offer non-profit discounts?",
      text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
    {
      title: "Can I see who reads my email campaigns?",
      text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
    {
      title: "Can I see who reads my email campaigns?",
      text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
  ];
  return (
    <Box className="flex flex-col items-center p-2 md:p-12">
      <Typography
        className="text-center md:text-left"
        sx={{
          ...theme.typography.h2,
          [theme.breakpoints.down("sm")]: {
            ...theme.typography.h3,
          },
        }}
      >
        Frequently Ask Question
      </Typography>
      <Typography
        className="text-center md:text-left"
        sx={{
          ...theme.typography.body1,
          color: theme.palette.text.primary,
        }}
      >
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </Typography>
      {FAQ.map((question, index) => (
        <Accordion
          key={index}
          className="w-auto md:w-3/4 lg:w-2/4 m-2 overflow-hidden"
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            borderRadius: "40px",
            position: "unset",
            transition: "background-color 0.3s ease",
            backgroundColor:
              expanded === `panel${index}`
                ? theme.palette.primary.main
                : "transparent",
            color: expanded === `panel${index}` ? "#fff" : "inherit",
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{question.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQSection;
