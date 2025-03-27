import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const theme = useTheme();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: isHome ? "white" : theme.palette.primary.light,
        backgroundImage: isHome
          ? "none"
          : `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.background.default})`,
        //   backgroundColor: isHome ? "transparent" : "white",
        padding: 4,
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
