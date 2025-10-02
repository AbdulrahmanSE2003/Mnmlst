import { useState, useEffect } from "react";

import Splash from "./components/Splash.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Dev from "./components/Dev.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [startAnimation, setStartAnimation] = useState(true);

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
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Splash
        showSplash={showSplash}
        onClick={() => chooseTheme("light")}
        onClick1={() => chooseTheme("dark")}
      />

      <Hero onClick={toggleTheme} theme={theme} start={startAnimation} />
      <About theme={theme} />
      <Dev dir={"left"}>Creative.</Dev>
      <Skills theme={theme}/>
      <Dev>Minimal.</Dev>
      <Projects />
      <Dev dir={"left"}>Innovative.</Dev>

      {/* Footer */}
      <Footer />
    </>
  );
}
