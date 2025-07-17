import { Grid2, Typography, Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutUsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
    rootMargin: "-20% 0px",
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: isMobile ? 0.8 : 1.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <>
      <Grid2
        container
        spacing={2}
        className="px-2 sm:px-4 md:px-8 mt-5 p-5 items-center justify-center max-md:p-5 max-md:w-fit"
        ref={ref}
      >
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="p-0 md:p-12 flex flex-col gap-16">
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
                  color: theme.palette.primary.dark,
                }}
              >
                Leave your worries at the door and enjoy a healthier, more
                precise smile
              </Typography>
            </motion.div>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: isMobile ? 0 : 0.4 }}
            >
              <Typography
                className="text-center md:text-left"
                sx={{
                  ...theme.typography.body1,
                  color: theme.palette.primary.dark,
                }}
              >
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don’t worry about
                anything and book yourself.
              </Typography>
            </motion.div>
            <Box className="flex flex-col md:flex-row gap-10">
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: isMobile ? 0 : 0.6 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    ...theme.typography.body2,
                    color: theme.palette.common.white,
                    textTransform: "none",
                    borderRadius: "10px",
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": { backgroundColor: theme.palette.primary.dark },
                  }}
                >
                  Book an appointment
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box
            sx={{
              placeItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: isMobile ? 0 : 0.3 }}
            >
              <img
                src="/smile.svg"
                alt="smile"
                loading="lazy"
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform, opacity, filter",
                }}
              />
            </motion.div>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default AboutUsSection;
