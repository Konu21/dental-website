import { Grid2, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import AboutUsSection from "./AboutUsSection";
import WhyChooseUs from "./WhyChooseUs";
import ColleagueSection from "./ColleagueSection";

function TeamSection() {
  const theme = useTheme();
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid2
        container
        spacing={2}
        className="mt-5 items-center justify-center max-md:p-5 max-md:w-fit"
      >
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="p-5 md:p-12 flex flex-col gap-16">
            <AnimatePresence>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ margin: "-25% 0px -25% 0px", once: true }}
              >
                <Typography
                  className="text-center md:text-left"
                  sx={{
                    ...theme.typography.h1,
                    [theme.breakpoints.down("md")]: {
                      ...theme.typography.h2,
                    },
                  }}
                >
                  We’re welcoming new patients and can’t wait to meet you.
                </Typography>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ margin: "-25% 0px -25% 0px", once: true }}
            >
              <Typography
                className="text-center md:text-left"
                sx={{
                  ...theme.typography.body1,
                  color: theme.palette.text.primary,
                }}
              >
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don’t worry about
                anything and book yourself.
              </Typography>
            </motion.div>

            <Box>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ margin: "-25% 0px -5% 0px", once: true }}
                className="flex flex-col md:flex-row gap-5 text-center items-center self-center"
              >
                <MuiTelInput
                  className="w-auto"
                  value={value}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  sx={{
                    ...theme.typography.body2,
                    color: theme.palette.primary.light,
                    textTransform: "none",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  Submit
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="place-items-center mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ margin: "-25% 0px -25% 0px", once: true }}
            >
              <img src="/patient.svg" alt="patient" loading="lazy" />
            </motion.div>
          </Box>
        </Grid2>
      </Grid2>
      <WhyChooseUs />
      <AboutUsSection />
      <ColleagueSection />
    </>
  );
}

export default TeamSection;
