import React, { useContext, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { songsData } from "./assets/assets";
import { PlayerContext } from "./context/PlyaerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-dvh bg-black">
      <div className="h-9/10 flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  );
};

export default App;
