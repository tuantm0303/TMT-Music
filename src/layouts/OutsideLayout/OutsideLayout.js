import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Player from "../../components/Player/Player";
import Playing from "../../components/Playing/Playing";
import './OutsideLayout.scss';

const OutsideLayout = ({ children }) => {
  return (
    <div className="hpleihespg">
      <div className="bjyyvxxehv">
        <Navbar />
        <div className="luvufpdcfl">
          <Header />
          {children}
        </div>
        <Player />
      </div>
      <Playing />
    </div>
  );
};

export default OutsideLayout;
