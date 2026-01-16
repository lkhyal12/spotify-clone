import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
export const PlayerContext = createContext();
const PlyaerContextProvider = (props) => {
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  function play() {
    audioRef.current.play();
    setPlayStatus(true);
  }

  function pause() {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  async function playWithId(id) {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  }

  const id = track.id;
  async function previous() {
    if (id > 0) {
      await setTrack(songsData[id - 1]);
    } else {
      await setTrack(songsData.at(-1));
    }
    audioRef.current.play();
    setPlayStatus(true);
  }
  async function next() {
    if (id < songsData.length - 1) {
      await setTrack((prev) => songsData[prev.id + 1]);
    } else {
      await setTrack(songsData[0]);
    }
    audioRef.current.play();
    setPlayStatus(true);
  }
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      seekBar.current.style.width =
        Math.floor((audio.currentTime / audio.duration) * 100) + "%";

      setTime({
        currentTime: {
          minute: Math.floor(audio.currentTime / 60),
          second: Math.floor(audio.currentTime % 60),
        },
        totalTime: {
          minute: Math.floor(audio.duration / 60) || 0,
          second: Math.floor(audio.duration % 60) || 0,
        },
      });
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => audio.removeEventListener("timeupdate", updateTime);
  }, [track]);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    time,
    setTime,
    playStatus,
    setPlayStatus,
    play,
    pause,
    playWithId,
    previous,
    next,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlyaerContextProvider;
