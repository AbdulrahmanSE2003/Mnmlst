import { useState, useEffect } from "react";

import Splash from "./components/Splash.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Dev from "./components/Dev.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [startAnimation, setStartAnimation] = useState(false);
  const [showBot, setShowBot] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === "light") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  function chooseTheme(t) {
    setTimeout(() => {
      setTheme(t);
      setShowSplash(false);
      localStorage.setItem("theme", t);
      if (t === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      setStartAnimation(true);
    }, 100);
  }
  return (
    <>
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} setShowBot={setShowBot} />

      <Splash
        showSplash={showSplash}
        onClick={() => chooseTheme("light")}
        onClick1={() => chooseTheme("dark")}
      />

      <Hero onClick={toggleTheme} theme={theme} start={startAnimation} />
      <About />
      <Dev dir={"left"}>Creative.</Dev>
      <Skills theme={theme} />
      <Dev>Minimal.</Dev>
      <Projects />
      <Dev dir={"left"}>Innovative.</Dev>
      <Stats />
      <Dev>Sleek.</Dev>
      <Testimonials />

      {/*Absolute contact component*/}
      {showBot && <Contact setShowBot={setShowBot} showBot={showBot} />}

      {/* Footer */}
      <Footer />
    </>
  );
}
