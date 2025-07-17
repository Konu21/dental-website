import { Box, useMediaQuery } from "@mui/material";
import { useState, memo } from "react";
import { AnimatePresence, motion, wrap } from "motion/react";
import { ArrowLeft, ArrowRight } from "./arrows";
import { useTheme } from "@mui/material/styles";
import ServiceCard from "./ServiceCard";
import { useInView } from "react-intersection-observer";

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

const ServicesSection = memo(function ServicesSection() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedItem, setSelectedItem] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(0, services.length, selectedItem + newDirection);
    setSelectedItem(nextItem);
    setDirection(newDirection);
  }
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  const slideTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className="w-full relative flex justify-center items-center sm:p-5 md:p-15 md:rounded-[10px] px-2 sm:px-4 md:px-8"
      style={{
        backgroundColor: theme.palette.primary.light,
        willChange: "transform, opacity",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        ...slideTransition,
        delay: isMobile ? 0 : 0.1,
      }}
      viewport={{ margin: "-20% 0px", once: true }}
    >
      {isMobile ? (
        <Box className="flex relative justify-center items-center w-full rounded-[20px] max-w-sm h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            {/* Butoane */}
            <motion.button
              key="prev-btn"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="w-10 h-10 rounded-full flex justify-center items-center top-1/2 left-5 -translate-y-1/2 z-10"
              onClick={() => setSlide(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft />
            </motion.button>

            {/* Conținut slider */}
            <Box className="relative w-full max-w-sm h-[400px] flex justify-center items-center overflow-hidden">
              <AnimatePresence
                custom={direction}
                initial={false}
                mode="popLayout"
              >
                <motion.div
                  key={selectedItem}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { ...slideTransition, delay: 0.1 },
                  }}
                  className="absolute w-full h-full flex justify-center items-center"
                >
                  <ServiceCard service={services[selectedItem]} theme={theme} />
                </motion.div>
              </AnimatePresence>
            </Box>

            <motion.button
              key="next-btn"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="w-10 h-10 rounded-full flex justify-center items-center top-1/2 right-5 -translate-y-1/2 z-10"
              onClick={() => setSlide(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight />
            </motion.button>
          </AnimatePresence>
        </Box>
      ) : (
        <Box className="w-full flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] max-w-sm"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <ServiceCard service={service} theme={theme} />
            </motion.div>
          ))}
        </Box>
      )}
    </motion.div>
  );
});

export default ServicesSection;
