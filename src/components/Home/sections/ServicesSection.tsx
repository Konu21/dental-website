import {
  Box,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";

function ServicesSection() {
  const theme = useTheme();
  const services = [
    {
      photo: "root_canal_treatment.svg",
      title: "Root Canal Treatment",
      text: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
      more_info_link: "link",
    },
    {
      photo: "cosmetic_dentist.svg",
      title: "Cosmetic Dentist",
      text: "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
      more_info_link: "link",
    },
    {
      photo: "dental_implants.svg",
      title: "Dental Implants",
      text: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
      more_info_link: "link",
    },
  ];
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      className="w-full p-10 flex gap-15 justify-center items-center rounded-[10px]"
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row" },
        backgroundColor: theme.palette.primary.light,
      }}
    >
      {isMobile ? (
        <Carousel navButtonsAlwaysVisible={true} className="w-sm">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col  text-center w-96 rounded-[10px] items-center"
            >
              <CardMedia
                sx={{ height: "5em", width: "5em" }}
                image={service.photo}
                title={service.title}
              />
              <CardContent>
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
              <CardActions>
                <Button
                  size="small"
                  component="a"
                  href={service.more_info_link}
                  sx={{
                    background: "transparent",
                    color: theme.palette.primary.dark,
                    "&:hover": {
                      color: theme.palette.primary.dark,
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Learn More <ArrowCircleRightIcon />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      ) : (
        <>
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col  text-center w-96 rounded-[10px] items-center "
            >
              <CardMedia
                sx={{ height: "6em", width: "6em" }}
                image={service.photo}
                title={service.title}
              />
              <CardContent>
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
              <CardActions>
                <Button
                  size="small"
                  component="a"
                  href={service.more_info_link}
                  sx={{
                    background: "transparent",
                    color: theme.palette.primary.dark,
                    "&:hover": {
                      color: theme.palette.primary.dark,
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Learn More <ArrowCircleRightIcon />
                </Button>
              </CardActions>
            </Card>
          ))}
        </>
      )}
    </Box>
  );
}

export default ServicesSection;
