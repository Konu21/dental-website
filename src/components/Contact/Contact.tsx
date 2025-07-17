import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactInfo = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-[20px] p-5 space-y-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9583.467931116842!2d26.101908152584357!3d44.42942749270816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff160df2d697%3A0x81c9835d70e30383!2sPia%C8%9Ba%20Unirii!5e0!3m2!1sen!2sro!4v1743113756502!5m2!1sen!2sro"
          className="w-full h-48 md:h-64 rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      {[
        "1411 Morris Ave, Union, NJ 07083",
        <strong>Office Timings:</strong>,
        "Monday - Saturday (9:00am to 5pm), Sunday (Closed)",
        <strong>Email:</strong>,
        "Smilo1@gmail.com",
        <strong>Phone:</strong>,
        "090-786401",
      ].map((content, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          <Typography
            className="text-center md:text-left"
            sx={{
              ...theme.typography.body2,
              [theme.breakpoints.down("sm")]: { fontSize: "0.875rem" },
            }}
          >
            {content}
          </Typography>
        </motion.div>
      ))}
    </motion.div>
  );
};

const AppointmentForm = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const formFields = [
    { label: "First name", type: "text" },
    { label: "Last name", type: "text" },
    { label: "Email", type: "email" },
    { label: "Phone number", type: "tel" },
    { label: "Select date", type: "date" },
    { label: "Message", type: "multiline" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-2xl p-5 space-y-4 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formFields.slice(0, 2).map((field, index) => (
          <motion.div
            key={field.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <TextField
              label={field.label}
              fullWidth
              variant="outlined"
              type={field.type}
              InputLabelProps={field.type === "date" ? { shrink: true } : {}}
            />
          </motion.div>
        ))}
      </div>

      {formFields.slice(2).map((field, index) => (
        <motion.div
          key={field.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <TextField
            label={field.label}
            fullWidth
            variant="outlined"
            type={field.type}
            multiline={field.type === "multiline"}
            rows={field.type === "multiline" ? 4 : undefined}
            InputLabelProps={field.type === "date" ? { shrink: true } : {}}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.95 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.light,
            textTransform: "none",
            fontSize: "1.2em",
            borderRadius: "10px",
            py: 1.5,
          }}
          fullWidth
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.95 }}
        >
          Book an appointment
        </Button>
      </motion.div>
    </motion.div>
  );
};

function Contact() {
  const theme = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Box
      className="flex flex-col items-center mt-5 px-2 sm:px-4 md:px-8"
      component="section"
    >
      <motion.div ref={ref} initial={false} animate={false}>
        <Typography
          className="text-center md:text-left"
          sx={{
            ...theme.typography.h1,
            [theme.breakpoints.down("sm")]: theme.typography.h2,
          }}
        >
          Get in touch
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        <Typography
          className="text-center md:text-left"
          sx={{
            ...theme.typography.body1,
            [theme.breakpoints.down("sm")]: theme.typography.body2,
          }}
        >
          Book an Appointment to treat your teeth right now.
        </Typography>
      </motion.div>

      <motion.div
        className="flex justify-center items-center p-4 w-full"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
          <ContactInfo />
          <AppointmentForm />
        </Box>
      </motion.div>
    </Box>
  );
}

export default Contact;
