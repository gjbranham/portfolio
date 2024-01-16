import React from "react";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Landing />
      <Skills />
      <Bio />
      <Contact />
    </main>
  );
}
