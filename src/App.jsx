import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

const App = () => {
  return (
    <div className="h-dvh bg-black">
      <div className="h-9/10 flex">
        <Sidebar />
      </div>
      <Player />
    </div>
  );
};

export default App;
