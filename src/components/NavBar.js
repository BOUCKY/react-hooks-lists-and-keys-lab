import React from "react";

function NavBar(prop) {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key={prop.home} href="#home">home</a>
    <a key={prop.about} href="#about">about</a>
    <a key={prop.projects} href="#projects">projects</a>
  </nav>;
}

export default NavBar;
