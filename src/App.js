import React from "react";
import Data from "./components/data/Data";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Cloud from "./components/cloud/Cloud";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </div>
  );
}

export default App;
