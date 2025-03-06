import { Grid2, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
            <Typography
              className="text-center md:text-left"
              sx={{
                ...theme.typography.h1,
                [theme.breakpoints.down("md")]: {
                  ...theme.typography.h2,
                },
              }}
            >
              Leave your worries at the door and enjoy a healthier, more precise
              smile
            </Typography>
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
            <Box className="flex flex-col md:flex-row gap-10">
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
            <img src="/smile.svg" alt="" />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}

export default AboutUsSection;
