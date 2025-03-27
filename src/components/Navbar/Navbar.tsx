import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

function Navbar() {
  const theme = useTheme(); // Accesează tema MUI
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  const navItemsBigScreen = [
    { to: "home", label: "Home", id: "home" },
    { to: "service", label: "Service", id: "service" },
    { to: "about", label: "About", id: "about" },
  ];
  const navItemsSmallScreen = [
    { to: "home", label: "Home", id: "home" },
    { to: "service", label: "Service", id: "service" },
    { to: "about", label: "About", id: "about" },
    { to: "contact", label: "Contact", id: "contact" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: isHome ? theme.palette.primary.light : "white",
        color: isHome ? "white" : theme.palette.primary.main,
        // {
        //   xs: "transparent",
        //   lg: theme.palette.primary.light,
        // },
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
            onClick={(e) => setAnchorElNav(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
          >
            {navItemsSmallScreen.map((item) => (
              <MenuItem key={item.id} onClick={() => setAnchorElNav(null)}>
                <Typography
                  component={Link}
                  to={item.to}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
