import { Grid2, Typography, Box, Button, useMediaQuery } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function WhyChooseUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
    rootMargin: "-20% 0px",
  });
  const reasons = [
    { text: "Top quality dental team" },
    { text: "State of the art dental services" },
    { text: "Discount on all dental treatment" },
    { text: "Enrollment is quick and easy" },
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const textVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: isMobile ? i * 0.01 : i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    }),
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
    <motion.div
      ref={ref}
      className="md:w-full p-5 flex gap-10 justify-center items-center rounded-[10px] flex-col md:flex-row"
      style={{
        backgroundColor: theme.palette.primary.light,
        willChange: "transform, opacity",
      }}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Grid2
        container
        spacing={2}
        className="mt-5 items-center justify-center max-md:p-5"
      >
        <Grid2 size={{ md: 12, lg: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
          <Box className="place-items-center w-full h-full">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: isMobile ? 0 : 0.3 }}
            >
              <img
                src="/treatments.svg"
                alt="treatments"
                loading="lazy"
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform, opacity, filter",
                }}
              />
            </motion.div>
          </Box>
        </Grid2>
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="p-0 md:p-12 flex flex-col gap-3.5">
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
                Why choose Smile for all your dental treatments?
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
                  color: theme.palette.text.primary,
                }}
              >
                We use only the best quality materials on the market in order to
                provide the best products to our patients.
              </Typography>
            </motion.div>
            {reasons.map((item, id) => (
              <motion.div
                key={id}
                variants={listItemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={id}
              >
                <Typography
                  sx={{
                    ...theme.typography.body2,
                  }}
                >
                  <GppGoodIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                  {item.text}
                </Typography>
              </motion.div>
            ))}
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
                    color: theme.palette.primary.light,
                    textTransform: "none",
                    borderRadius: "10px",
                  }}
                >
                  Book an appointment
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </motion.div>
  );
}

export default WhyChooseUs;
