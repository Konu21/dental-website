import { Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@mui/material/styles";
import ServiceCard from "../Home/sections/ServiceCard";
import ColleagueSection from "../Home/sections/ColleagueSection";
import "./Services.css";

const services = [
  // Lista optimizată fără duplicate
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
    text: "A dental implant is an artificial tooth root that's placed into your jaw to hold a prosthetic tooth or bridge.",
    more_info_link: "link",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const formVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function Services() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { ref: headerRef } = useInView({
    threshold: 0.1,
  });
  const { ref: servicesRef } = useInView({
    threshold: 0.1,
  });
  const { ref: formRef } = useInView({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <motion.div initial="hidden" animate="visible">
      <Box
        ref={headerRef}
        className="p-2 md:p-12 flex flex-col items-center gap-6"
        component={motion.div}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              ...theme.typography.h1,
              [theme.breakpoints.down("sm")]: theme.typography.h2,
            }}
            className="text-center md:text-left"
          >
            Services
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              ...theme.typography.body1,
              color: theme.palette.text.primary,
            }}
            className="text-center md:text-left"
          >
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </Typography>
        </motion.div>
      </Box>
      <Box
        ref={servicesRef}
        className="flex flex-wrap gap-6 md:gap-32 justify-center"
        component={motion.div}
        variants={containerVariants}
      >
        {[...services, ...services].map((service, index) => (
          <motion.div
            key={`${service.title}-${index}`}
            className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] max-w-sm"
            variants={itemVariants}
          >
            <ServiceCard service={service} theme={theme} />
          </motion.div>
        ))}
      </Box>
      <Box
        className="p-2 md:p-12 flex flex-col md:flex-row items-center justify-around gap-6"
        component={motion.div}
        variants={containerVariants}
      >
        <motion.div className="md:w-1/2" variants={itemVariants}>
          <Typography
            sx={{
              ...theme.typography.h2,
              [theme.breakpoints.down("sm")]: theme.typography.h3,
            }}
            className="text-center md:text-left"
          >
            Leave your worries at the door and enjoy a healthier, more precise
            smile
          </Typography>

          <Typography
            sx={{
              ...theme.typography.body2,
              color: theme.palette.text.primary,
            }}
            className="text-center md:text-left mt-4"
          >
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </Typography>
        </motion.div>

        <motion.div
          ref={formRef}
          className="md:w-1/3"
          variants={formVariants}
          transition={{ type: "spring", stiffness: 60 }}
        >
          <Typography
            sx={{
              ...theme.typography.h3,
              [theme.breakpoints.down("sm")]: theme.typography.h4,
            }}
            className="text-center md:text-left mb-6"
          >
            Request Appointment
          </Typography>

          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email", "phone"].map((field) => (
              <motion.div key={field} variants={itemVariants}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  required
                />
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  color: theme.palette.primary.light,
                  py: 2,
                }}
              >
                Submit
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </Box>
      <ColleagueSection />
    </motion.div>
  );
}

export default Services;
