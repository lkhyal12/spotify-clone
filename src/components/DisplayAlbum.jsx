import React from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import Navbar from "./Navbar";
const DisplayAlbum = () => {
  const { id } = useParams();
  const album = albumsData[id];
  console.log(album);
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded " src={album.image} alt="" />
        <div className="flex flex-col ">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
          <h4>{album.desc}</h4>
          <div className="mt-1 flex items-center gap-2">
            <img
              src={assets.spotify_logo}
              alt=""
              className="inline-block w-5"
            />
            <b>Spotify</b>• 1,123,774 likes • <b>50 Songs</b>
            About 2 hr and 30 min
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block ">Date Added </p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="" />
      </div>

      {songsData.map((song, index) => (
        <div
          key={song.id}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7] ">{index + 1}</b>
            <img src={song.image} className="inline w-10 mr-5" alt="" />
            {song.name}
          </p>
          <p className="text-sm ">{song.name}</p>
          <p className="text-sm hidden sm:block">5 days ago</p>
          <p className="text-sm text-center">{song.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
