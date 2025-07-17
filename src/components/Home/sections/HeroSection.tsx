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
        className="px-2 sm:px-4 md:px-8 mt-5 lg:mx-16 items-center max-md:px-2 max-md:w-full"
      >
        {/* Pe mobil, imaginea deasupra textului */}
        {isMobile && (
          <Grid2 size={{ xs: 12 }}>
            <Box
              ref={imageRef}
              className="flex justify-center items-center w-full mb-4"
            >
              <motion.div
                initial="hidden"
                animate={imageInView ? "visible" : "hidden"}
                variants={{
                  hidden: { scale: 0.97, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0,
                }}
              >
                <picture>
                  <source
                    srcSet="/avatar.webp"
                    type="image/webp"
                    media="(min-width: 768px)"
                    width="400"
                    height="400"
                  />
                  <img
                    src="/avatar.webp"
                    alt="Portrait of a smiling dentist in blue uniform, dental website hero image"
                    loading="eager"
                    width={isMobile ? 180 : 340}
                    height={isMobile ? 180 : 340}
                    className="w-full max-w-[180px] md:max-w-md lg:w-4/5 h-auto object-cover mx-auto rounded-full shadow-lg"
                    style={{
                      transform: "translateZ(0)",
                      background: "#f5faff",
                    }}
                  />
                </picture>
              </motion.div>
            </Box>
          </Grid2>
        )}
        <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
          <Box
            className="p-2 md:p-12 flex flex-col gap-8 md:gap-16"
            ref={textRef}
          >
            <motion.div
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={{
                hidden: { x: -30, opacity: 0 },
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
                component="h1"
                className="text-center md:text-left"
                sx={{
                  ...theme.typography.h1,
                  [theme.breakpoints.down("sm")]: {
                    ...theme.typography.h2,
                    fontSize: "2.2rem",
                    lineHeight: "120%",
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
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.1rem",
                  },
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
                hidden: { y: 20, opacity: 0 },
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
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    border: `0px solid ${theme.palette.primary.main}`,
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: isMobile ? "1rem" : "1.05rem",
                    minWidth: isMobile ? "100%" : "fit-content",
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    textTransform: "none",
                    backgroundColor: "transparent",
                    boxShadow: 1,
                    transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
                    "&:hover": {
                      // backgroundColor: theme.palette.primary.dark,
                      color: theme.palette.primary.light,
                      border: `2px  ${theme.palette.primary.main}`,
                      boxShadow: 2,
                    },
                  }}
                  component="a"
                  href="tel:0900-78601"
                  aria-label="Call Dental 24H Emergency 0900-78601"
                >
                  <PhoneIcon
                    sx={{
                      marginRight: "0.5em",
                      borderWidth: "2px",
                      borderRadius: "8px",
                      height: "2em",
                      width: "2em",
                      color: theme.palette.primary.main,
                      background: "transparent",
                      transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
                      border: `2px solid ${theme.palette.primary.main}`,
                      "&:hover": {
                        color: theme.palette.primary.light,
                        background: "transparent",
                        border: "none",
                      },
                    }}
                  />
                  <Box className="flex flex-col justify-center">
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "1.1",
                        fontWeight: 700,
                        letterSpacing: "0.01em",
                        color: "inherit",
                        transition: "color 0.2s",
                      }}
                    >
                      DENTAL 24H EMERGENCY
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        lineHeight: "1.1",
                        fontWeight: 400,
                        color: "inherit",
                        transition: "color 0.2s",
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
        {/* Pe desktop, imaginea în dreapta */}
        {!isMobile && (
          <Grid2 size={{ md: 12, lg: 6 }}>
            <Box
              ref={imageRef}
              className="flex justify-center items-center w-full"
            >
              <motion.div
                initial="hidden"
                animate={imageInView ? "visible" : "hidden"}
                variants={{
                  hidden: { scale: 0.97, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.3,
                }}
              >
                <picture>
                  <source
                    srcSet="/avatar.webp"
                    type="image/webp"
                    media="(min-width: 768px)"
                    width="400"
                    height="400"
                  />
                  <img
                    src="/avatar.webp"
                    alt="Portrait of a smiling dentist in blue uniform, dental website hero image"
                    loading="eager"
                    width={400}
                    height={400}
                    className="w-full max-w-xs md:max-w-md lg:w-4/5 h-auto object-cover mx-auto rounded-full shadow-lg"
                    style={{ transform: "translateZ(0)" }}
                  />
                </picture>
              </motion.div>
            </Box>
          </Grid2>
        )}
      </Grid2>
    </>
  );
}

export default HeroSection;
