import { Grid2, Typography, Box, Button } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useTheme } from "@mui/material/styles";

function WhyChooseUs() {
  const theme = useTheme();
  const reasons = [
    {
      text: "Top quality dental team",
    },
    {
      text: "State of the art dental services",
    },
    {
      text: "Discount on all dental treatment",
    },
    {
      text: "Enrollment is quick and easy",
    },
  ];
  return (
    <Box
      className="md:w-full p-5 flex gap-10 justify-center items-center rounded-[10px]"
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row" },
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Grid2
        container
        spacing={2}
        className="mt-5 items-center justify-center max-md:p-5"
      >
        <Grid2 size={{ md: 12, lg: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
          <Box
            sx={{
              placeItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <img src="/treatments.svg" alt="" />
          </Box>
        </Grid2>
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="p-0 md:p-12 flex flex-col gap-3.5">
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
            {reasons.map((item, id) => (
              <Typography
                key={id}
                sx={{
                  ...theme.typography.body2,
                }}
              >
                <GppGoodIcon />
                {item.text}
              </Typography>
            ))}
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
      </Grid2>
    </Box>
  );
}

export default WhyChooseUs;
