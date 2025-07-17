import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  IconButton,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./Navbar.css";

function Navbar() {
  const theme = useTheme(); // Accesează tema MUI
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));

  const navItemsBigScreen = [
    { to: "home", label: "Home", id: "home" },
    { to: "service", label: "Service", id: "service" },
    { to: "about", label: "About", id: "about" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: isBelowLg
          ? "white"
          : isHome
          ? theme.palette.primary.light
          : "white",
        color: isBelowLg
          ? "black"
          : isHome
          ? "white"
          : theme.palette.primary.main,

        boxShadow: { xs: "none" },
      }}
      className="rounded-[10px] "
    >
      <Toolbar className="flex justify-between">
        <Typography
          variant="h3"
          component={Link}
          to="home"
          sx={{
            display: { xs: "flex" },
            mr: 2,
            letterSpacing: ".3rem",
            color: theme.palette.primary.dark,
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>

        {/* Meniu pentru ecrane mari */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: "1.5em" }}>
          {navItemsBigScreen.map((item) => (
            <MenuItem
              key={item.id}
              component={Link}
              to={item.to}
              sx={{
                color: theme.palette.primary.dark,
                textTransform: "none",
                fontSize: "1.2em",
                borderRadius: "10px",
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Box>
        <Box>
          <Button
            key="contact"
            component={Link}
            to="contact"
            sx={{
              display: { xs: "none", lg: "flex" },
              color: theme.palette.primary.light,
              textTransform: "none",
              fontSize: "1.2em",
              borderRadius: "10px",
            }}
          >
            Contact
          </Button>
        </Box>
        {/* Meniu mobil (pentru ecrane mici) */}
        <Box sx={{ display: { xs: "flex", lg: "none" } }}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon sx={{ fontSize: "2em" }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: "80vw",
                maxWidth: 320,
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(16px)",
                boxShadow: 4,
                p: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                border: "none",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".2em",
                  color: theme.palette.primary.dark,
                  textAlign: "center",
                }}
              >
                LOGO
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                px: 3,
                mt: 2,
              }}
            >
              <Button
                startIcon={<HomeIcon />}
                component={Link}
                to="home"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  color: theme.palette.primary.dark,
                  fontWeight: 600,
                  fontSize: "1.1em",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  py: 1.5,
                  minWidth: 0,
                  background: "none",
                  "&:hover": {
                    background: theme.palette.primary.light,
                  },
                }}
              >
                Home
              </Button>
              <Button
                startIcon={<MiscellaneousServicesIcon />}
                component={Link}
                to="service"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  color: theme.palette.primary.dark,
                  fontWeight: 600,
                  fontSize: "1.1em",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  py: 1.5,
                  minWidth: 0,
                  background: "none",
                  "&:hover": {
                    background: theme.palette.primary.light,
                  },
                }}
              >
                Service
              </Button>
              <Button
                startIcon={<InfoIcon />}
                component={Link}
                to="about"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  color: theme.palette.primary.dark,
                  fontWeight: 600,
                  fontSize: "1.1em",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  py: 1.5,
                  minWidth: 0,
                  background: "none",
                  "&:hover": {
                    background: theme.palette.primary.light,
                  },
                }}
              >
                About
              </Button>
              <Button
                startIcon={<ContactMailIcon />}
                component={Link}
                to="contact"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  color: theme.palette.primary.dark,
                  fontWeight: 600,
                  fontSize: "1.1em",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2,
                  py: 1.5,
                  minWidth: 0,
                  background: "none",
                  "&:hover": {
                    background: theme.palette.primary.light,
                  },
                }}
              >
                Contact
              </Button>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
