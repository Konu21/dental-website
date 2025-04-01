import { useState } from "react";
import {
  Typography,
  Box,
  CardMedia,
  Card,
  CardContent,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "./arrows";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

interface Service {
  photo: string;
  title: string;
  text: string;
}

function AvatarCard({ service, theme }: { service: Service; theme: Theme }) {
  return (
    <Card className="flex flex-col relative text-center rounded-[10px] items-center max-w-80 h-full">
      <CardMedia
        component="img"
        className="w-full h-full object-cover"
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

function ColleagueSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedItem, setSelectedItem] = useState(0);
  const [direction, setDirection] = useState(0);

  const colleagues = [
    { photo: "Jim Carry.svg", title: "Jim Carry", text: "Orthodontist" },
    { photo: "Wade Warren.svg", title: "Wade Warren", text: "Endodontist" },
    { photo: "Jenny Wilson.svg", title: "Jenny Wilson", text: "Periodontist" },
    {
      photo: "Jacob Jones.svg",
      title: "Jacob Jones",
      text: "Pediatric Dentist",
    },
  ];

  const setSlide = (newDirection: number) => {
    setDirection(newDirection);
    setSelectedItem((prev) => wrap(0, colleagues.length, prev + newDirection));
  };

  return (
    <Box
      className="w-full flex justify-center relative items-center p-5 md:p-15 md:rounded-[10px]"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      {isMobile ? (
        <Box className="flex relative justify-center items-center w-full rounded-[20px] max-w-sm h-[400px] overflow-hidden">
          <IconButton
            component={motion.button}
            initial={false}
            aria-label="Previous"
            className="absolute left-2 z-10"
            onClick={() => setSlide(-1)}
            whileFocus={{ outline: "2px solid #0cdcf7" }}
          >
            <ArrowLeft />
          </IconButton>

          <Box className="relative w-full max-w-sm h-[400px] flex justify-center items-center overflow-hidden">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={selectedItem}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="absolute w-full h-full flex justify-center items-center"
              >
                <AvatarCard service={colleagues[selectedItem]} theme={theme} />
              </motion.div>
            </AnimatePresence>
          </Box>

          <IconButton
            component={motion.button}
            initial={false}
            aria-label="Next"
            className="absolute right-2 z-10"
            onClick={() => setSlide(1)}
            whileFocus={{ outline: "2px solid #0cdcf7" }}
          >
            <ArrowRight />
          </IconButton>
        </Box>
      ) : (
        <Box className="w-full flex flex-wrap  justify-center gap-5">
          {colleagues.map((colleague, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] max-w-sm"
            >
              <AvatarCard service={colleague} theme={theme} />
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default ColleagueSection;
