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
import { useTheme, Theme } from "@mui/material/styles";

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
      className="w-full flex justify-center items-center p-5 md:p-15 md:rounded-[10px]"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      {isMobile ? (
        <Carousel
          navButtonsAlwaysVisible={true}
          indicators={false}
          className="w-full max-w-sm pb-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} theme={theme} />
          ))}
        </Carousel>
      ) : (
        <Box className="w-full flex flex-wrap justify-center gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] max-w-sm"
            >
              <ServiceCard service={service} theme={theme} />
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
}

interface Service {
  photo: string;
  title: string;
  text: string;
  more_info_link: string;
}

function ServiceCard({ service, theme }: { service: Service; theme: Theme }) {
  return (
    <Card className="flex flex-col text-center rounded-[10px] items-center">
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
  );
}

export default ServicesSection;
