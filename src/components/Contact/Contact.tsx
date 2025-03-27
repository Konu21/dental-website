import { Box, TextField, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ContactInfo = () => {
  const theme = useTheme();

  return (
    <div className="bg-white shadow-md rounded-[20px] p-5 space-y-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9583.467931116842!2d26.101908152584357!3d44.42942749270816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff160df2d697%3A0x81c9835d70e30383!2sPia%C8%9Ba%20Unirii!5e0!3m2!1sen!2sro!4v1743113756502!5m2!1sen!2sro"
        className="w-full h-48 md:h-64 rounded-lg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Typography
        className="text-center md:text-left"
        sx={{
          ...theme.typography.body1,
          [theme.breakpoints.down("sm")]: {
            ...theme.typography.body2,
          },
        }}
      >
        1411 Morris Ave, Union, NJ 07083
      </Typography>
      <Typography
        className="text-center md:text-left"
        sx={{ ...theme.typography.body2 }}
      >
        <strong>Office Timings:</strong> Monday - Saturday (9:00am to 5pm),
        Sunday (Closed)
      </Typography>
      <Typography
        className="text-center md:text-left"
        sx={{ ...theme.typography.body2 }}
      >
        <strong>Email:</strong> Smilo1@gmail.com
      </Typography>
      <Typography
        className="text-center md:text-left"
        sx={{ ...theme.typography.body2 }}
      >
        <strong>Phone:</strong> 090-786401
      </Typography>
    </div>
  );
};

const AppointmentForm = () => {
  const theme = useTheme();

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 space-y-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField label="First name" fullWidth variant="outlined" />
        <TextField label="Last name" fullWidth variant="outlined" />
      </div>
      <TextField label="Email" fullWidth variant="outlined" type="email" />
      <TextField label="Phone number" fullWidth variant="outlined" />
      <TextField
        label="Select date"
        fullWidth
        variant="outlined"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Message"
        fullWidth
        multiline
        rows={4}
        variant="outlined"
      />
      <Button
        variant="contained"
        sx={{
          color: theme.palette.primary.light,
          textTransform: "none",
          fontSize: "1.2em",
          borderRadius: "10px",
        }}
        fullWidth
      >
        Book an appointment
      </Button>
    </div>
  );
};
function Contact() {
  const theme = useTheme();
  return (
    <Box className="flex flex-col items-center mt-5">
      <Typography
        className="text-center md:text-left"
        sx={{
          ...theme.typography.h1,
          [theme.breakpoints.down("sm")]: {
            ...theme.typography.h2,
          },
        }}
      >
        Get in touch
      </Typography>
      <Typography
        className="text-center md:text-left"
        sx={{
          ...theme.typography.body1,
          [theme.breakpoints.down("sm")]: {
            ...theme.typography.body2,
          },
        }}
      >
        Book an Appointment to treat your teeth right now.
      </Typography>
      <Box className="  flex justify-center items-center p-4">
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
          <ContactInfo />
          <AppointmentForm />
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
