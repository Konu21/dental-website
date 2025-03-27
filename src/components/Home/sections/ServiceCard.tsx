import {
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Theme } from "@mui/material/styles";
interface Service {
  photo: string;
  title: string;
  text: string;
  more_info_link: string;
}

function ServiceCard({ service, theme }: { service: Service; theme: Theme }) {
  return (
    <Card className="flex flex-col text-center rounded-[10px] items-center">
      <CardMedia
        sx={{ height: "6em", width: "6em" }}
        image={service.photo}
        title={service.title}
      />
      <CardContent>
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
      <CardActions>
        <Button
          size="small"
          component="a"
          href={service.more_info_link}
          sx={{
            background: "transparent",
            color: theme.palette.primary.dark,
            "&:hover": {
              color: theme.palette.primary.dark,
              backgroundColor: "transparent",
            },
          }}
        >
          Learn More <ArrowCircleRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
export default ServiceCard;
