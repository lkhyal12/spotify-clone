import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-dvh bg-black">
      <div className="h-9/10 flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
