import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Player from "../../components/Player/Player";
import Playing from "../../components/Playing/Playing";
import './OutsideLayout.scss';

const OutsideLayout = ({ children }) => {
  const { song } = useSelector((state) => state.songReducer)

  const inSongValid = song && song.title && song.slug
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
      {inSongValid ? <Playing /> : null}
    </div>
  );
};

export default OutsideLayout;
