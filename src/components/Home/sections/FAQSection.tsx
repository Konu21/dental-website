import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const FAQ = [
  {
    title: "Can I see who reads my email campaigns?",
    text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur.",
  },
  {
    title: "Can I see who reads my email campaigns?",
    text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur.",
  },
  {
    title: "Can I see who reads my email campaigns?",
    text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur.",
  },
  {
    title: "Can I see who reads my email campaigns?",
    text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur.",
  },
  {
    title: "Can I see who reads my email campaigns?",
    text: "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur.",
  },
  // ... alte întrebări
];

const titleVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const itemVariants = {
  hidden: (i: number) => ({
    x: i % 2 === 0 ? -50 : 50,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

function FAQSection() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(false);
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const handleChange = (panel: string) => (_: unknown, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center p-2 md:p-12 gap-8"
    >
      <motion.div variants={titleVariants}>
        <Typography
          className="text-center md:text-left"
          sx={{
            ...theme.typography.h2,
            [theme.breakpoints.down("sm")]: theme.typography.h3,
          }}
        >
          Frequently Asked Questions
        </Typography>
      </motion.div>

      <motion.div variants={titleVariants} transition={{ delay: 0.2 }}>
        <Typography
          className="text-center md:text-left"
          sx={{
            ...theme.typography.body1,
            color: theme.palette.text.primary,
          }}
        >
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
        </Typography>
      </motion.div>

      <Box className="w-full flex flex-col items-center gap-4">
        {FAQ.map((question, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            className="w-full md:w-3/4 lg:w-1/2"
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                bgcolor:
                  expanded === `panel${index}`
                    ? theme.palette.primary.main
                    : "background.paper",
                color:
                  expanded === `panel${index}` ? "common.white" : "inherit",
                transition: theme.transitions.create(
                  ["background-color", "color"],
                  {
                    duration: theme.transitions.duration.short,
                  }
                ),
              }}
              style={{ borderRadius: "16px" }}
            >
              <AccordionSummary
                expandIcon={
                  <motion.div
                    animate={{ rotate: expanded === `panel${index}` ? 45 : 0 }}
                  >
                    <AddIcon />
                  </motion.div>
                }
              >
                <Typography variant="h6">{question.title}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="body2">{question.text}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default FAQSection;
