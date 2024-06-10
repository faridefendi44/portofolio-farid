import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/about";
import Portofolio from "./page/portofolio";
import Contact from "./page/contact";
import Profil from "./page/profil";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import "../style/globals.css";
function App({ Component, pageProps }) {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
