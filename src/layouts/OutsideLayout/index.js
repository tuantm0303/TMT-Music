import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Player from "../../components/Player";

const OutSideLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="flex-grow-[1]">
        <Header />
        {children}
      </div>
      <Player />
    </>
  );
};

export default OutSideLayout;
