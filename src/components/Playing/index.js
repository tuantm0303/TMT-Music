import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { GiMusicalKeyboard } from "react-icons/gi";
import { RiMoreFill } from "react-icons/ri";
import { BsMic } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { FcMusic } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { nextPrevSong } from "../../store/features/songSlice";
import Song from "../Player/components/Song";

const Playing = () => {
  const { song, songs, currentIndex } = useSelector(
    (state) => state.songReducer
  );
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(nextPrevSong((currentIndex + 1) % songs.length));
  };
  const handlePrev = () => {
    dispatch(nextPrevSong((currentIndex - 1) % songs.length));
  };

  return (
    <div className="playing fixed flex w-full justify-between items-center bg-[#130C1C] text-white h-[90px] z-[9999] bottom-0">
      <div className="playing-left flex flex-grow">
        <div className="media pl-4 w-[300px] h-16">
          <Song
            image={song?.image}
            title={song?.title}
            singer={song?.singerId?.fullname}
          />
        </div>
        <div className="icon flex w-[45px] justify-between items-center">
          <AiFillHeart style={{ width: 20, height: 20 }} />
          <RiMoreFill style={{ width: 20, height: 20 }} />
        </div>
      </div>
      <div className="playing-center w-full px-5 flex-grow block">
        <AudioPlayer
          className="music-play"
          style={{ background: "#130C1C" }}
          src={song?.audio}
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={handleNext}
          onClickPrevious={handlePrev}
        />
      </div>
      <div className="playing-right flex flex-grow justify-end w-[345px] pr-10">
        <GiMusicalKeyboard style={{ width: 20, height: 20, margin: 10 }} />
        <BsMic style={{ width: 20, height: 20, margin: 10 }} />
        <SlScreenDesktop style={{ width: 20, height: 20, margin: 10 }} />
        <FcMusic style={{ width: 20, height: 20, margin: 10 }} />
      </div>
    </div>
  );
};

export default Playing;
