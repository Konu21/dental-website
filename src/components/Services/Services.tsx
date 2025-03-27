import { Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import ServiceCard from "../Home/sections/ServiceCard";
import ColleagueSection from "../Home/sections/ColleagueSection";

import "./Services.css";
function Services() {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <Box className="p-2 md:p-12 flex flex-col items-center gap-6">
        <Typography
          className="text-center md:text-left"
          sx={{
            ...theme.typography.h1,
            [theme.breakpoints.down("sm")]: {
              ...theme.typography.h2,
            },
          }}
        >
          Services
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
      </Box>
      <Box className="flex flex-wrap gap-6 md:gap-32 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] max-w-sm"
          >
            <ServiceCard service={service} theme={theme} />
          </div>
        ))}
      </Box>
      <Box className="p-2 md:p-12 flex flex-col md:flex-row items-center justify-around gap-6">
        <Box className="md:w-1/2">
          <Typography
            className="text-center md:text-left"
            sx={{
              ...theme.typography.h2,
              [theme.breakpoints.down("sm")]: {
                ...theme.typography.h3,
              },
            }}
          >
            Leave your worries at the door and enjoy a healthier, more precise
            smile
          </Typography>
          <Typography
            className="text-center md:text-left"
            sx={{
              ...theme.typography.body2,
              color: theme.palette.text.primary,
            }}
          >
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </Typography>
        </Box>
        <Box>
          <Typography
            className="text-center md:text-left"
            sx={{
              ...theme.typography.h3,
              [theme.breakpoints.down("sm")]: {
                ...theme.typography.h4,
              },
            }}
          >
            Request Appointment
          </Typography>{" "}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
              />
            </div>
            <div className="mb-4">
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                type="tel"
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Trimite
            </Button>
          </form>
        </Box>
      </Box>
      <ColleagueSection />
    </>
  );
}

export default Services;
