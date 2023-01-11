import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Player from "../../components/Player";

const OutSideLayout = ({ children }) => {
  return (
    <div className="flex w-full bg-[#170F23] text-[#EEEE]">
      <Sidebar />
      <div className="flex-grow-[1]">
        <Header />
        {children}
      </div>
      <Player />
    </div>
  );
};

export default OutSideLayout;
