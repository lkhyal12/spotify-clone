import React from "react";
import { assets, songsData } from "../assets/assets";

const Player = () => {
  const handleSongProgress = (e) => {
    const bar = e.currentTarget;
    const { x, width } = bar.getBoundingClientRect();
    const mouseX = e.clientX - x;
    const widthRatio = (mouseX / width) * 100;
    const hr = bar.querySelector("hr");
    hr.style.width = widthRatio + "%";
  };
  return (
    <div className="h-1/10 bg-black flex justify-between items-center text-white px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img src={songsData[0].image} alt="" className="w-12" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 18) + "..."}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer "
            src={assets.shuffle_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer " src={assets.prev_icon} alt="" />
          <img className="w-4 cursor-pointer " src={assets.play_icon} alt="" />
          <img className="w-4 cursor-pointer " src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer " src={assets.loop_icon} alt="" />
        </div>

        <div className="flex items-center gap-5">
          <p>01.22</p>
          <div
            className="w-[60vw] max-w-125 rounded-full bg-gray-300 cursor-pointer overflow-hidden"
            onClick={handleSongProgress}
          >
            <hr className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>03.50</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75 ">
        <img src={assets.play_icon} alt="" className="cursor-pointer w-4" />
        <img src={assets.mic_icon} alt="" className="cursor-pointer w-4" />
        <img src={assets.queue_icon} alt="" className="cursor-pointer w-4" />
        <img src={assets.speaker_icon} alt="" className="cursor-pointer w-4" />
        <img src={assets.volume_icon} alt="" className="cursor-pointer w-4" />

        <div className="w-20 bg-slate-50 h-1 rounded " />

        <img
          src={assets.mini_player_icon}
          alt=""
          className="cursor-pointer w-4"
        />
        <img src={assets.zoom_icon} alt="" className="cursor-pointer w-4" />
      </div>
    </div>
  );
};

export default Player;
