import {
  Typography,
  Box,
  CardMedia,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";

interface Service {
  photo: string;
  title: string;
  text: string;
}
function AvatarCard({ service, theme }: { service: Service; theme: Theme }) {
  return (
    <Card className="flex flex-col relative text-center rounded-[10px] items-center max-w-80">
      <CardMedia
        component="img"
        className="w-full h-full"
        // sx={{ height: "10em", width: "100%" }}
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

  const colleagues = [
    {
      photo: "Jim Carry.svg",
      title: "Jim Carry",
      text: "Orthodontist",
    },
    {
      photo: "Wade Warren.svg",
      title: "Wade Warren",
      text: "Endodontist",
    },
    {
      photo: "Jenny Wilson.svg",
      title: "Jenny Wilson",
      text: "Periodontist",
    },
    {
      photo: "Jacob Jones.svg",
      title: "Jacob Jones",
      text: "Pediatric Dentist",
    },
  ];
  return (
    <Box
      className="w-full flex justify-center relative items-center p-5 md:p-15 md:rounded-[10px]"
      sx={{ backgroundColor: theme.palette.primary.light }}
    >
      {isMobile ? (
        <Carousel
          navButtonsAlwaysVisible={true}
          indicators={false}
          className="flex w-80 max-w-sm rounded-[10px]"
        >
          {colleagues.map((colleague, index) => (
            <AvatarCard key={index} service={colleague} theme={theme} />
          ))}
        </Carousel>
      ) : (
        <Box className="w-full flex flex-wrap  justify-center gap-5">
          {colleagues.map((colleague, index) => (
            <div
              key={index}
              className="w-full  sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] max-w-sm"
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
