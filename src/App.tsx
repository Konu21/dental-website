import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="lg:p-12 pt-5">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
