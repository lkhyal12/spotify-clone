import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
            src={assets.arrow_left}
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
            src={assets.arrow_right}
            onClick={() => navigate(1)}
          />
        </div>

        <div className="flex items-center gap-4 ">
          <p className="bg-white text-black text-sm rounded-2xl px-4 py-2 cursor-pointer font-medium hidden md:block">
            Explore Premium
          </p>

          <p className="bg-black text-white text-sm rounded-2xl px-3 py-2 cursor-pointer font-medium ">
            Install App
          </p>
          <p className="bg-purple-500 text-black font-bold h-8 w-8 flex items-center justify-center cursor-pointer rounded-full">
            A
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 ">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer font-medium">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer font-medium">
          Music
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer font-medium">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
