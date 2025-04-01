import { Grid2, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as motion from "motion/react-client";

function AboutUsSection() {
  const theme = useTheme();

  return (
    <>
      <Grid2
        container
        spacing={2}
        className="mt-5 p-5 items-center justify-center max-md:p-5 max-md:w-fit"
      >
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="p-0 md:p-12 flex flex-col gap-16">
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
                  [theme.breakpoints.down("md")]: {
                    ...theme.typography.h2,
                  },
                }}
              >
                Leave your worries at the door and enjoy a healthier, more
                precise smile
              </Typography>
            </motion.div>
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
                  ...theme.typography.body1,
                  color: theme.palette.text.primary,
                }}
              >
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don’t worry about
                anything and book yourself.
              </Typography>
            </motion.div>
            <Box className="flex flex-col md:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ margin: "-25% 0px -5% 0px", once: true }}
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
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box
            sx={{
              placeItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              viewport={{ margin: "-25% 0px -25% 0px", once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img src="/smile.svg" alt="smile" loading="lazy" />
            </motion.div>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default AboutUsSection;
