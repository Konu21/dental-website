import { useState, useCallback } from "react";
import {
  Typography,
  Box,
  CardContent,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "./arrows";
import { useInView } from "react-intersection-observer";

interface Service {
  photo: string;
  title: string;
  text: string;
}

const colleagues = [
  { photo: "Jim Carry.svg", title: "Jim Carry", text: "Orthodontist" },
  { photo: "Wade Warren.svg", title: "Wade Warren", text: "Endodontist" },
  { photo: "Jenny Wilson.svg", title: "Jenny Wilson", text: "Periodontist" },
  { photo: "Jacob Jones.svg", title: "Jacob Jones", text: "Pediatric Dentist" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const slideTransition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.5,
};

function AvatarCard({ service, theme }: { service: Service; theme: Theme }) {
  return (
    <motion.div
      className="flex flex-col relative text-center rounded-[10px] items-center max-w-80 h-full"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <img
          className="w-full h-full object-cover"
          src={service.photo}
          title={service.title}
          alt={service.title}
          loading="lazy"
          width={320}
          height={400}
          style={{ transform: "translateZ(0)" }}
        />
      </motion.div>
      <CardContent
        className="backdrop-blur-lg absolute bottom-6 rounded-[10px]"
        component={motion.div}
        variants={cardVariants}
      >
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
    </motion.div>
  );
}

function ColleagueSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedItem, setSelectedItem] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
    rootMargin: "-20% 0px",
  });

  const setSlide = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setSelectedItem((prev) => wrap(0, colleagues.length, prev + newDirection));
  }, []);

  return (
    <Box
      ref={ref}
      className="w-full flex justify-center relative items-center px-2 sm:px-4 md:px-8 p-5 md:p-15 md:rounded-[10px]"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      {isMobile ? (
        <Box className="flex relative justify-center items-center w-full rounded-[20px] max-w-sm h-[400px] overflow-hidden">
          <IconButton
            component={motion.button}
            aria-label="Previous"
            className="absolute left-2 z-10"
            onClick={() => setSlide(-1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft />
          </IconButton>

          <Box className="relative w-full max-w-sm h-[400px] flex justify-center items-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={selectedItem}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={slideTransition}
                className="absolute w-full h-full flex justify-center items-center"
              >
                <AvatarCard service={colleagues[selectedItem]} theme={theme} />
              </motion.div>
            </AnimatePresence>
          </Box>

          <IconButton
            component={motion.button}
            aria-label="Next"
            className="absolute right-2 z-10"
            onClick={() => setSlide(1)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight />
          </IconButton>
        </Box>
      ) : (
        <Box className="w-full flex flex-wrap justify-center gap-5">
          {colleagues.map((colleague, index) => (
            <motion.div
              key={colleague.title}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] max-w-sm"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <AvatarCard service={colleague} theme={theme} />
            </motion.div>
          ))}
        </Box>
      )}
    </Box>
  );
}

// Helper function
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export default ColleagueSection;
