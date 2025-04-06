import { Grid2, Typography, Box, Button, useMediaQuery } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";

import * as motion from "motion/react-client";

function HeroSection() {
  const theme = useTheme();
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid2
        container
        spacing={2}
        className="mt-5 lg:mx-16  items-center max-md:px-5 max-md:w-fit"
      >
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="p-2 md:p-12 flex flex-col gap-16" ref={textRef}>
            <motion.div
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={{
                hidden: { x: -30, opacity: 0 }, // Reducem deplasarea inițială
                visible: { x: 0, opacity: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: isMobile ? 0 : 0.2,
              }}
            >
              <Typography
                className="text-center md:text-left"
                sx={{
                  ...theme.typography.h1,
                  [theme.breakpoints.down("sm")]: {
                    ...theme.typography.h2,
                  },
                }}
              >
                Get ready for your best ever Dental Experience!
              </Typography>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: isMobile ? 0.8 : 1.2,
                ease: "easeInOut",
                delay: isMobile ? 0 : 0.4,
              }}
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
            <motion.div
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={{
                hidden: { y: 20, opacity: 0 }, // Reducem deplasarea verticală
                visible: { y: 0, opacity: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: isMobile ? 0 : 0.6,
              }}
            >
              <Box className="flex flex-col md:flex-row gap-10">
                <Button
                  variant="contained"
                  sx={{
                    ...theme.typography.body2,
                    color: theme.palette.primary.light,
                    textTransform: "none",
                    borderRadius: "10px",
                    width: "auto",
                    minWidth: "fit-content",
                  }}
                >
                  Book an appointment
                </Button>
                <Button
                  variant="text"
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    "&:hover": {
                      color: theme.palette.primary.light,
                      backgroundColor: "#1c82ef",
                    },
                  }}
                >
                  <PhoneIcon
                    sx={{
                      marginRight: "0.5em",
                      borderWidth: "2px",
                      borderRadius: "10px",
                      height: "2em",
                      width: "2em",
                    }}
                  />
                  <Box className="flex flex-col">
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "155%",
                        fontWeight: 600,
                      }}
                    >
                      Dental 24H Emergency
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "155%",
                        fontWeight: 400,
                      }}
                    >
                      0900-78601
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Grid2>
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box ref={imageRef}>
            <motion.div
              initial="hidden"
              animate={imageInView ? "visible" : "hidden"}
              variants={{
                hidden: { scale: 0.97, opacity: 0 }, // Reducem scalarea inițială
                visible: { scale: 1, opacity: 1 },
              }}
              transition={{
                duration: isMobile ? 0.8 : 1.5,
                ease: [0.33, 1, 0.68, 1], // Custom easing curve
                delay: isMobile ? 0 : 0.3,
              }}
            >
              <img
                src="/avatar.png"
                alt="Dentist Avatar"
                loading="lazy"
                height={400}
                width={400}
                className="lg:w-4/5 h-auto object-cover"
                style={{ transform: "translateZ(0)" }}
              />
            </motion.div>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default HeroSection;
