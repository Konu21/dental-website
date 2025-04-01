import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
// import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as motion from "motion/react-client";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="p-0 m-0 min-h-screen bg-inherit">
        <Router>
          <Layout>
            <motion.div
              className="lg:px-12 pt-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <Navbar />
            </motion.div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/service" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
