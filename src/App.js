import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

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
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .features-container,
        .team-container,
        .maintainers-container,
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
  }, 2000);
  return (
    <div data-theme={theme} className="app">
      <ScrollTop />
      <NavBar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Features />
      <Screenshots />
      <Devices />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
