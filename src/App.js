import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Maintainers from "./components/Maintainers";
import Home from "./components/Home";
import Features from "./components/Features";
import Screenshots from "./components/screenshots/Screenshots";
import Devices from "./components/Devices";
import Team from "./components/Team";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";
import scrollreveal from "scrollreveal";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "100px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .features-container,
        .team-container,
        .maintainers-container,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);
  return (
    <Router>
      <div data-theme={theme} className="app">
        <ScrollTop />
        <NavBar changeTheme={changeTheme} currentTheme={theme} />
        <Home />
        <Features />
        <Screenshots />
        <Devices />
        <Team />
        <Routes>
          <Route path="/Maintainers" exact element={<Maintainers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
