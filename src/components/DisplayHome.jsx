import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DisplayHome = () => {
  const albumContainerRef = useRef();
  const songsContainerRef = useRef();
  const [albumScrollLeft, setAlbumScrollLeft] = useState(0);
  const [albumScrollWidth, setAlbumScrollWidth] = useState(0);
  const [albumParentWidth, setAlbumParentWidth] = useState(0);
  const [songScrollLeft, setSongScrollLeft] = useState(0);
  const [songScrollWidth, setSongScrollWidth] = useState(0);
  const [songParentElementWidth, setSongParentElementWidth] = useState(0);

  useEffect(() => {
    const albumContainer = albumContainerRef.current;
    const songsContainer = songsContainerRef.current;

    if (albumContainer) {
      setAlbumScrollWidth(albumContainer.scrollWidth);
      setAlbumParentWidth(albumContainerRef.current.parentElement.clientWidth);
    }

    if (songsContainer) {
      setSongScrollWidth(songsContainer.scrollWidth);
      setSongParentElementWidth(
        songsContainerRef.current.parentElement.clientWidth
      );
    }
  }, []);

  function handleAlbumScrollLeft() {
    setAlbumScrollLeft((prev) => {
      const calc = prev - 200;
      return calc < 0 ? 0 : calc;
    });
    albumContainerRef.current.scrollLeft -= 200;
  }

  function handleSongScrollLeft() {
    console.log("hhh");
    setSongScrollLeft((prev) => {
      const calc = prev - 200;
      return calc < 0 ? 0 : calc;
    });
    songsContainerRef.current.scrollLeft -= 200;
  }
  function handleAlbumScrollRight() {
    setAlbumScrollLeft((prev) => {
      const calc = prev + 200;
      return calc > albumScrollWidth ? albumScrollWidth : calc;
    });
    albumContainerRef.current.scrollLeft += 200;
  }

  // scroll songContainer right function
  function handleSongScrollRight() {
    setSongScrollLeft((prev) => {
      const calc = prev + 200;
      return calc > songScrollWidth ? songScrollWidth : calc;
    });
    songsContainerRef.current.scrollLeft += 200;
  }
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <div className="my-5 font-bold text-2xl">
          <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
          <div className=" relative">
            <div
              ref={albumContainerRef}
              className="flex  overflow-x-hidden  scroll-smooth"
            >
              {albumsData.map((item, index) => (
                <AlbumItem
                  image={item.image}
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  desc={item.desc}
                />
              ))}

              {albumScrollLeft > 0 && (
                <ChevronLeft
                  className="absolute top-20 left-2  cursor-pointer"
                  size={45}
                  onClick={() => handleAlbumScrollLeft()}
                />
              )}
              {albumScrollLeft + albumParentWidth < albumScrollWidth && (
                <ChevronRight
                  className="absolute top-20 right-2  cursor-pointer"
                  size={45}
                  onClick={() => handleAlbumScrollRight()}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="my-5 font-bold text-2xl">
          <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
          <div className="relative">
            <div
              ref={songsContainerRef}
              className="flex overflow-x-hidden relative scroll-smooth"
            >
              {songsData.map((item, index) => (
                <SongItem
                  image={item.image}
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  desc={item.desc}
                />
              ))}
            </div>
            {songScrollLeft > 0 && (
              <ChevronLeft
                size={45}
                className="absolute top-20 left-2  cursor-pointer"
                onClick={handleSongScrollLeft}
              />
            )}
            {songScrollLeft + songParentElementWidth < songScrollWidth && (
              <ChevronRight
                size={45}
                className="absolute top-20 right-2  cursor-pointer"
                onClick={handleSongScrollRight}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
