import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");

  const albumId = isAlbum ? location.pathname.split("/").pop() : -1;

  useEffect(() => {
    if (displayRef.current && albumId !== -1) {
      displayRef.current.style.background = `linear-gradient(${albumsData[albumId].bgColor}, #121212)`;
    } else if (displayRef.current) {
      displayRef.current.style.background = "#121212";
    }
  }, [albumId]);
  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-black text-white overflow-auto lg:w-7/10 lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
