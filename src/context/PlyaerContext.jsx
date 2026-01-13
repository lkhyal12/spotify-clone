import React, { createContext, useRef, useState } from "react";
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
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlyaerContextProvider;
