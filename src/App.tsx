import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="p-0 m-0 min-h-screen bg-inherit">
        <Router>
          <Layout>
            <Box className="lg:p-12 pt-5">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </Layout>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
