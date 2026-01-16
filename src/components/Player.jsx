import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlyaerContext";

const Player = () => {
  const {
    audioRef,
    play,
    pause,
    playStatus,
    seekBg,
    seekBar,
    track,
    time,
    previous,
    next,
  } = useContext(PlayerContext);

  const currentMinute =
    time.currentTime.minute >= 10
      ? time.currentTime.minute
      : "0" + time.currentTime.minute;
  const currentSecond =
    time.currentTime.second >= 10
      ? time.currentTime.second
      : "0" + time.currentTime.second;

  const totalMinute =
    time.totalTime.minute >= 10
      ? time.totalTime.minute
      : "0" + time.totalTime.minute;
  const totalSecond =
    time.totalTime.second >= 10
      ? time.totalTime.second
      : "0" + time.totalTime.second;
  const handleSongProgress = (e) => {
    const bar = e.currentTarget;
    const { x, width } = bar.getBoundingClientRect();

    const mouseX = e.clientX - x;
    const widthRatio = (mouseX / width) * 100;
    const currentTime = (widthRatio / 100) * audioRef.current.duration;
    audioRef.current.currentTime = currentTime;
    const hr = bar.querySelector("hr");
    hr.style.width = widthRatio + "%";
  };
  return (
    <div className="h-1/10 bg-black flex justify-between items-center text-white px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img src={track.image} alt="" className="w-12" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 18) + "..."}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer "
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer "
            src={assets.prev_icon}
            alt=""
          />
          {!playStatus ? (
            <img
              className="w-4 cursor-pointer "
              src={assets.play_icon}
              alt=""
              onClick={() => play()}
            />
          ) : (
            <img
              className="w-4 cursor-pointer "
              src={assets.pause_icon}
              alt=""
              onClick={() => pause()}
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer "
            src={assets.next_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer " src={assets.loop_icon} alt="" />
        </div>

        <div className="flex items-center gap-5">
          <p>
            {currentMinute}:{currentSecond}
          </p>
          <div
            className="w-[60vw] max-w-125 rounded-full bg-gray-300 cursor-pointer overflow-hidden"
            onClick={handleSongProgress}
            ref={seekBg}
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {totalMinute}:{totalSecond}
          </p>
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
