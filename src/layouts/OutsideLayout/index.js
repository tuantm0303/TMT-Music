import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Player from "../../components/Player";
import Playing from "../../components/Playing";

const OutSideLayout = ({ children }) => {
  return (
    <div className="main">
      <div className="flex w-full bg-[#170F23] text-[#EEEE]">
        <Sidebar />
        <div className="flex-grow-[1]">
          <Header />
          {children}
        </div>
        <Player />
      </div>
      <Playing />
    </div>
  );
};

export default OutSideLayout;
