import { useState } from "react";
import { Grid2, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";

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
            <Box className=" flex flex-col md:flex-row gap-5 self-center">
              <MuiTelInput value={value} onChange={handleChange} />
              <Button
                variant="contained"
                sx={{
                  ...theme.typography.body2,
                  color: theme.palette.primary.light,
                  textTransform: "none",
                  borderRadius: "10px",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ md: 12, lg: 6 }}>
          <Box className="place-items-center mb-10 lg:mb-0">
            <img src="/patient.svg" alt="" />
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
