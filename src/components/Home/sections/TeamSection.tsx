import { useState } from "react";
import {
  Grid2,
  Typography,
  Box,
  Button,
  CardMedia,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";
import Carousel from "react-material-ui-carousel";

import AboutUsSection from "./AboutUsSection";
import WhyChooseUs from "./WhyChooseUs";

interface Service {
  photo: string;
  title: string;
  text: string;
}
function AvatarCard({ service, theme }: { service: Service; theme: Theme }) {
  return (
    <Card className="flex flex-col relative text-center rounded-[10px] items-center max-w-80">
      <CardMedia
        component="img"
        className="w-full h-full"
        // sx={{ height: "10em", width: "100%" }}
        image={service.photo}
        title={service.title}
        alt={service.title}
      />
      <CardContent className="backdrop-blur-lg absolute bottom-6 rounded-[10px]">
        <Typography
          gutterBottom
          component="div"
          sx={{ ...theme.typography.h4 }}
        >
          {service.title}
        </Typography>
        <Typography sx={{ ...theme.typography.body2 }}>
          {service.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
function TeamSection() {
  const theme = useTheme();
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const colleagues = [
    {
      photo: "Jim Carry.svg",
      title: "Jim Carry",
      text: "Orthodontist",
    },
    {
      photo: "Wade Warren.svg",
      title: "Wade Warren",
      text: "Endodontist",
    },
    {
      photo: "Jenny Wilson.svg",
      title: "Jenny Wilson",
      text: "Periodontist",
    },
    {
      photo: "Jacob Jones.svg",
      title: "Jacob Jones",
      text: "Pediatric Dentist",
    },
  ];

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
      <Box
        className="w-full flex justify-center relative items-center p-5 md:p-15 md:rounded-[10px]"
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        {isMobile ? (
          <Carousel
            navButtonsAlwaysVisible={true}
            indicators={false}
            className="flex w-80 max-w-sm rounded-[10px]"
          >
            {colleagues.map((colleague, index) => (
              <AvatarCard key={index} service={colleague} theme={theme} />
            ))}
          </Carousel>
        ) : (
          <Box className="w-full flex flex-wrap  justify-center gap-5">
            {colleagues.map((colleague, index) => (
              <div
                key={index}
                className="w-full  sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] max-w-sm"
              >
                <AvatarCard service={colleague} theme={theme} />
              </div>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

export default TeamSection;
