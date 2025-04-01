import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, motion, wrap } from "motion/react";
import { ArrowLeft, ArrowRight } from "./arrows";
import { useTheme } from "@mui/material/styles";
import ServiceCard from "./ServiceCard";

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
  const [selectedItem, setSelectedItem] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(0, services.length, selectedItem + newDirection);
    setSelectedItem(nextItem);
    setDirection(newDirection);
  }
  return (
    <motion.div
      className="w-full relative flex justify-center items-center sm:p-5 md:p-15 md:rounded-[10px]"
      style={{
        backgroundColor: theme.palette.primary.light,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ margin: "-15% 0px -15% 0px", once: true }}
      transition={{
        type: "spring",
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {isMobile ? (
        <Box className="flex relative justify-center items-center w-full rounded-[20px] max-w-sm h-[400px] overflow-hidden">
          <motion.button
            initial={false}
            aria-label="Previous"
            className="w-10 h-10 rounded-full flex justify-center items-center top-1/2 left-5 -translate-y-1/2 z-10 outline-offset-2"
            onClick={() => setSlide(-1)}
            whileFocus={{ outline: "2px solid #0cdcf7" }}
          >
            <ArrowLeft />
          </motion.button>
          <Box className="relative w-full max-w-sm h-[400px] flex justify-center items-center overflow-hidden">
            <AnimatePresence
              custom={direction}
              initial={false}
              mode="popLayout"
            >
              <motion.div
                key={selectedItem}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                className="absolute w-full h-full flex justify-center items-center"
              >
                <ServiceCard service={services[selectedItem]} theme={theme} />
              </motion.div>
            </AnimatePresence>
          </Box>
          <motion.button
            initial={false}
            aria-label="Next"
            className="w-10 h-10 rounded-full flex justify-center items-center top-1/2 left-5 -translate-y-1/2 z-10 outline-offset-2"
            onClick={() => setSlide(1)}
            whileFocus={{ outline: "2px solid #0cdcf7" }}
          >
            <ArrowRight />
          </motion.button>
        </Box>
      ) : (
        <Box className="w-full flex flex-wrap justify-center gap-10">
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
    </motion.div>
  );
}

export default ServicesSection;
