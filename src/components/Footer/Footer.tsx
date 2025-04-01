import { Grid, Typography, Link, IconButton, useTheme } from "@mui/material";
import {
  Phone,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  // Constants for footer content
  const contactInfo = {
    clinicName: "Smile Dental Clinic",
    address: "Venta San Francisco 1/2",
    phone: "+1 (555) 123-4567",
    email: "hello@smiledental.com",
  };

  const quickLinks = [
    { label: "Home", path: "/home" },
    { label: "Services", path: "/service" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const openingHours = [
    { days: "Mon-Fri", hours: "8:00 AM – 6:00 PM" },
    { days: "Sat", hours: "9:00 AM – 2:00 PM" },
    { days: "Sun", hours: "Closed" },
  ];

  const socialMedia = [
    { icon: <Facebook />, label: "Facebook", url: "#" },
    { icon: <Instagram />, label: "Instagram", url: "#" },
    { icon: <LinkedIn />, label: "LinkedIn", url: "#" },
  ];

  const accreditation = {
    text: "Accreditation: Audiante de la Universidad del Salamiento",
    copyright: "© 2023 Smile Dental Clinic. All rights reserved.",
  };

  return (
    <footer
      style={{
        backgroundColor: isHome ? theme.palette.primary.light : "white",
        color: "black",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          maxWidth: theme.breakpoints.values.xl,
          margin: "0 auto",
          padding: theme.spacing(6, 4),
        }}
      >
        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h4" color="primary.dark" gutterBottom>
              {contactInfo.clinicName}
            </Typography>
            <Typography variant="body2" paragraph>
              {contactInfo.address}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <Phone fontSize="small" color="primary" />
              <Link
                href={`tel:${contactInfo.phone}`}
                color="text.primary"
                underline="hover"
              >
                {contactInfo.phone}
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Email fontSize="small" color="primary" />
              <Link
                href={`mailto:${contactInfo.email}`}
                color="text.primary"
                underline="hover"
              >
                {contactInfo.email}
              </Link>
            </div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h4" color="primary.dark" gutterBottom>
              Quick Links
            </Typography>
            <Grid container direction="column" spacing={1}>
              {quickLinks.map((link) => (
                <Grid item key={link.label}>
                  <Link
                    href={link.path}
                    color="text.primary"
                    underline="hover"
                    sx={{
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {link.label}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Opening Hours */}
          <Grid item xs={12} md={3}>
            <Typography variant="h4" color="primary.dark" gutterBottom>
              Opening Hours
            </Typography>
            {openingHours.map((time) => (
              <Typography key={time.days} variant="body2" paragraph>
                {`${time.days}: ${time.hours}`}
              </Typography>
            ))}
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="h4" color="primary.dark" gutterBottom>
              Follow Us
            </Typography>
            <div style={{ display: "flex", gap: 16 }}>
              {socialMedia.map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  href={social.url}
                  sx={{
                    color: "text.primary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </div>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: `1px solid ${theme.palette.divider}`,
            marginTop: theme.spacing(6),
            paddingTop: theme.spacing(4),
          }}
        >
          <Typography
            variant="body2"
            align="center"
            color="text.primary"
            paragraph
          >
            {accreditation.text}
          </Typography>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Typography variant="body2" align="center" color="text.secondary">
              {accreditation.copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
