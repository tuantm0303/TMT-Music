import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMoreFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const DetailSong = () => {
  const { song } = useSelector((state) => state.songReducer);
  return (
    <>
      <div className="song group flex items-center h-[60px] w-full p-2 hover:bg-slate-500 hover:rounded-lg">
        <img
          src={song?.image}
          alt={song?.title}
          className="w-10 rounded-lg group-hover:opacity-60"
        />
        <div className="text pl-5 flex-grow-[1] h-10 leading-[10px]">
          <p className="title-song font-bold text-sm">{song?.title}</p>
          <p className="singer opacity-60 hover:underline hover:text-purple-500 text-xs py-0.5">
            {song?.singerId?.fullname}
          </p>
          <span className="time text-xs">{song?.time}</span>
        </div>
        <div className="icons-hidden hidden hover:inline-flex">
          <AiOutlineHeart />
          <RiMoreFill />
        </div>
      </div>
    </>
  );
};

export default DetailSong;
