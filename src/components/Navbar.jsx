import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-10 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm xl:rounded-full">
        <Link to={"/"}>Home</Link>
        <Link to={"/profil"}>Profil</Link>
        <Link to={"/portofolio"}>Portofolio</Link>
        <Link to={"/portofolio"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
