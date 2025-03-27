import { Box, useMediaQuery } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import ServiceCard from "./ServiceCard";
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

export default ServicesSection;
