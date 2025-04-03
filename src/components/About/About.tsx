import { Typography, Box, Grid2 } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const missionParagraphs = [
  `At Northern Heights Dental, people come first. We help each of our 
  patients to achieve optimal wellness and health by using a whole body 
  approach to oral health.`,
  `This means not just focusing on cavities, but focusing on; cranio-facial 
  development, bite and joint balance, oral flora, proper muscle 
  balance/function, and bio-compatibility of dental materials. Great care 
  and planning ensure that everything we do helps promote overall health 
  and well being.`,
  `More than anything else we love creating happy, healthy smiles.`,
  `We work hard to stay up to date with the most advanced techniques and 
  technologies to ensure that our patients receive the best care possible. 
  Our office utilizes 3D CBCT radiographs to allow for guided surgical and 
  endodontic protocols.`,
];

const specialists = [
  {
    name: "Dr. Brent",
    photo: "brent.svg",
    specility: "( Specility in General & Cosmetic Service )",
    text: "Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures. Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.",
  },
  {
    name: "Dr. Ashish J. Vashi",
    photo: "vashi.svg",
    specility: "( Specility in implant dentistry )",
    text: "Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years. He believes in giving the highest quality dentistry in a comfortable, caring environment. He strives to get to know his patients, not just their teeth.including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.",
  },
  {
    name: "Dr. James Connors",
    photo: "james.svg",
    specility: "( Specility in Oral Surgeon )",
    text: "When it comes to oral surgeons, few can compare to the modern-day legend that is Dr. James Connors. As our oral and maxillofacial surgery specialist, Dr. Connors will brighten your day with his seasoned expertise, welcoming conversations, and – of course – his signature rotation of fun bowties. Dr. Connors and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.",
  },
];

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About() {
  const theme = useTheme();
  // Removed unused missionElementRef
  const { ref: missionInViewRef, inView: isMissionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box className="flex flex-col mt-5 lg:mx-16 items-center max-md:p-5 max-md:w-fit">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          sx={{
            ...theme.typography.h1,
            [theme.breakpoints.down("sm")]: theme.typography.h2,
          }}
          className="text-center md:text-left"
        >
          About Us
        </Typography>
      </motion.div>

      {/* Mission Section */}
      <Grid2
        container
        spacing={2}
        className="flex flex-row  m-16 content-around"
      >
        <Grid2 size={{ sm: 12, md: 8 }} className="flex flex-col gap-5 w-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h2"
              className="text-center justify-center pt-5 md:text-left"
              sx={{
                ...theme.typography.h2,
                [theme.breakpoints.down("sm")]: theme.typography.h3,
              }}
            >
              Our Mission
            </Typography>
          </motion.div>

          <Box ref={missionInViewRef} className="space-y-6">
            {missionParagraphs.map((text, index) => (
              <motion.div
                key={index}
                variants={paragraphVariants}
                initial="hidden"
                animate={isMissionInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <Typography
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.shadows[1],
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: theme.shadows[3],
                    },
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    position: "relative",
                  }}
                >
                  {text}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </Grid2>

        <Grid2 size={{ sm: 12, md: 4 }} className="flex justify-center">
          <motion.img
            src="/about-1st-photo.svg"
            alt="about-1st-photo"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-full h-auto"
            loading="lazy"
          />
        </Grid2>
      </Grid2>

      {/* Specialists Section */}
      <Box className="flex flex-col  w-full mt-12 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Typography
            variant="h2"
            className="text-center justify-self-center pt-11 md:text-left"
            sx={{
              ...theme.typography.h2,
              [theme.breakpoints.down("sm")]: theme.typography.h3,
            }}
          >
            Meet our specialists
          </Typography>
        </motion.div>

        {specialists.map((specialist, index) => (
          <motion.div
            key={specialist.name}
            className="mt-10 flex flex-col md:flex-row gap-7 items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 + 0.8 }}
          >
            <motion.div
              className="shrink-0 rounded-[20px] overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={specialist.photo}
                alt={`${specialist.name} portrait`}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>

            <motion.div className="flex flex-col justify-center sm:w-1/2">
              <Box className="flex flex-col md:flex-row gap-4 items-center">
                <Typography
                  sx={{
                    ...theme.typography.h3,
                    [theme.breakpoints.down("sm")]: theme.typography.h5,
                  }}
                  className="text-center md:text-left"
                >
                  {specialist.name}
                </Typography>
                <Typography
                  sx={theme.typography.body2}
                  className="text-center md:text-left"
                >
                  {specialist.specility}
                </Typography>
              </Box>

              <Typography
                sx={{
                  ...theme.typography.body1,
                  [theme.breakpoints.down("sm")]: theme.typography.body2,
                }}
                className="text-center md:text-left mt-4"
              >
                {specialist.text}
              </Typography>
            </motion.div>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default About;
