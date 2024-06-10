import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm xl:rounded-full text-3xl xl:text-2xl">
        <Link to={"/"}><IoMdHome /></Link>
        <Link to={"/profil"}><RiAccountPinCircleFill /></Link>
        <Link to={"/portofolio"}><RiGitRepositoryFill /></Link>
        <Link to={"/portofolio"}><MdContactPhone /></Link>
      </div>
    </div>
  );
};

export default Navbar;
