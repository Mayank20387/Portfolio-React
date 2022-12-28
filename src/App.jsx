import React, { useState } from "react";
import "./styles.css";
import Topbar from "./components/topbar/Topbar";
import Scroll from "./components/scroll/scroll.component";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
// import Skills from "./components/skills/Skills";
import Menu from "./components/menu/Menu";
// import { Skills } from "./components/skills/Skills";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Scroll />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Header />
      <About />

      {/* <Skills /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
