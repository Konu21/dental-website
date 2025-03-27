import { Typography, Box, Grid2 } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function About() {
  const theme = useTheme();
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
  return (
    <Box
      className=" flex flex-col mt-5 items-center max-md:p-5 max-md:w-fit"
      sx={{ padding: 0 }}
    >
      <Typography
        className="text-center md:text-left"
        sx={{
          ...theme.typography.h1,
          [theme.breakpoints.down("sm")]: {
            ...theme.typography.h2,
          },
        }}
      >
        About Us
      </Typography>
      <Grid2 container spacing={2} className="flex flex-row content-around">
        <Grid2 size={{ sm: 12, md: 8 }} className=" flex flex-col gap-5 w-auto">
          <Typography
            className="text-center pt-5 md:text-left"
            sx={{
              ...theme.typography.h2,
              [theme.breakpoints.down("sm")]: {
                ...theme.typography.h3,
              },
            }}
          >
            Our Mision
          </Typography>
          <Typography
            className="text-center md:text-left"
            sx={{
              ...theme.typography.body2,
              [theme.breakpoints.down("sm")]: {
                fontWeight: 300,
              },
              color: theme.palette.text.primary,
            }}
          >
            At Northern Heights Dental, people come first. We help each of our
            patients to achieve optimal wellness and health by using a whole
            body approach to oral health. This means not just focusing on
            cavities, but focusing on; cranio-facial development, bite and joint
            balance, oral flora, proper muscle balance/function, and
            bio-compatibility of dental materials. Great care and planning
            ensure that everything we do helps promote overall health and well
            being.
          </Typography>
          <Typography
            className="text-center md:text-left"
            sx={{
              ...theme.typography.h4,
              color: theme.palette.text.primary,
            }}
          >
            More than anything else we love creating happy, healthy smiles.
          </Typography>
          <Typography
            className="text-center md:text-left"
            sx={{
              ...theme.typography.body2,
              [theme.breakpoints.down("sm")]: {
                fontWeight: 300,
              },
              color: theme.palette.text.primary,
            }}
          >
            We work hard to stay up to date with the most advanced techniques
            and technologies to ensure that our patients receive the best care
            possible. Our office utilizes 3D CBCT radiographs to allow for
            guided surgical and endodontic protocols. This enables these
            procedures to performed digitally before they are performed
            surgically to ensure optimal results. 3D imaging also is utilized
            for the analysis of airway growth and development. We also use the
            best 3D optical scanner for all of our dental restoration and
            Invisalign impressions. Dr Williams is a strong advocate for using
            microsurgical techniques, this means less discomfort and faster
            healing times.
          </Typography>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }} className="flex justify-center ">
          <img src="/about-1st-photo.svg" alt="about-1st-photo" />
        </Grid2>
      </Grid2>
      <Typography
        className="text-center pt-11 md:text-left"
        sx={{
          ...theme.typography.h2,
          [theme.breakpoints.down("sm")]: {
            ...theme.typography.h3,
          },
        }}
      >
        Meet our specialists
      </Typography>
      <Typography
        className="text-center pt-5 md:text-left"
        sx={{
          ...theme.typography.body1,
          [theme.breakpoints.down("sm")]: {
            ...theme.typography.body2,
          },
        }}
      >
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </Typography>
      {specialists.map((specialist, index) => (
        <Box
          className="mt-10 flex flex-col md:flex-row gap-7 items-center justify-center"
          key={index}
        >
          <Box className="flex justify-center shrink-0 rounded-[20px]">
            <img src={specialist.photo} alt={specialist.photo} />
          </Box>
          <Box className="flex flex-col justify-center sm:w-1/2">
            <Box className="flex flex-col md:flex-row gap-4 items-center">
              <Typography
                className="text-center md:text-left"
                sx={{
                  ...theme.typography.h3,
                  [theme.breakpoints.down("sm")]: {
                    ...theme.typography.h5,
                  },
                }}
              >
                {specialist.name}
              </Typography>
              <Typography
                className="text-center md:text-left "
                sx={{
                  ...theme.typography.body2,
                  [theme.breakpoints.down("sm")]: {
                    ...theme.typography.body2,
                  },
                }}
              >
                {specialist.specility}
              </Typography>
            </Box>
            <Typography
              className="text-center md:text-left "
              sx={{
                ...theme.typography.body1,
                [theme.breakpoints.down("sm")]: {
                  ...theme.typography.body2,
                },
              }}
            >
              {specialist.text}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
export default About;
