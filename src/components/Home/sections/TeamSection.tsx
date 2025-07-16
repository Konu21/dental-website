import { Grid2, Typography, Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutUsSection from "./AboutUsSection";
import WhyChooseUs from "./WhyChooseUs";
import ColleagueSection from "./ColleagueSection";

function TeamSection() {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
    rootMargin: "-15% 0px",
  });
  const textVariants = {
    hidden: { x: -40, opacity: 0, rotate: -1 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.8 : 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: isMobile ? 0.8 : 1.4,
        ease: [0.32, 0.72, 0.48, 1],
      },
    },
  };

  return (
    <>
      <Grid2
        container
        spacing={2}
        className="mt-5 lg:mx-16 items-center justify-center max-md:p-5 max-md:w-fit"
        ref={ref}
      >
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="p-5 md:p-12 flex flex-col gap-16">
            {/* <AnimatePresence> */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: isMobile ? 0 : 0.2 }}
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
            {/* </AnimatePresence> */}

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: isMobile ? 0 : 0.4 }}
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
                variants={scaleInVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: isMobile ? 0 : 0.6 }}
                className="flex flex-col md:flex-row gap-5 text-center items-center self-center"
              >
                <label htmlFor="phone-input" style={{ display: "none" }}>
                  Phone number
                </label>
                <MuiTelInput
                  id="phone-input"
                  className="w-auto"
                  value={value}
                  onChange={handleChange}
                  label="Phone number"
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
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: isMobile ? 0 : 0.3 }}
            >
              <img
                src="/patient.svg"
                alt="patient"
                loading="lazy"
                className="transform"
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform, opacity, filter",
                }}
              />
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
