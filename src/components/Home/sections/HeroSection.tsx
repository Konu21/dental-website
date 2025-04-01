import { Grid2, Typography, Box, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTheme } from "@mui/material/styles";

import * as motion from "motion/react-client";

function HeroSection() {
  const theme = useTheme();

  return (
    <>
      <Grid2
        container
        spacing={2}
        className="mt-5 items-center max-md:p-5 max-md:w-fit"
      >
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="p-2 md:p-12 flex flex-col gap-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              viewport={{ margin: "-25% 0px -25% 0px", once: true }}
              transition={{ duration: 0.8 }}
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
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              viewport={{ margin: "-25% 0px -25% 0px", once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: 50 }}
              viewport={{ margin: "-25% 0px -5% 0px", once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
          <Box className="">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              viewport={{ margin: "-25% 0px -25% 0px", once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img src="/avatar.png" alt="Dentist Avatar" loading="lazy" />
            </motion.div>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default HeroSection;
