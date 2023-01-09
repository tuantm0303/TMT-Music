import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMoreFill } from "react-icons/ri";

const Song = ({ title, singer, time }) => {
  return (
    <>
      <div className="song group flex items-center h-[60px] w-full p-2 hover:bg-slate-500 hover:rounded-lg">
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/d/8/9/8d8925bf78937c966bd9a25678a4dbe4.jpg"
          alt=""
          className="w-10 rounded-lg group-hover:opacity-60"
        />
        <div className="text pl-5 flex-grow-[1] h-10 leading-[10px]">
          <p className="title-song font-bold text-sm">{title}</p>
          <p className="singer opacity-60 hover:underline hover:text-purple-500 text-xs py-0.5">
            {singer}
          </p>
          <span className="time text-xs">{time}</span>
        </div>
        <div className="icons-hidden hidden hover:inline-flex">
          <AiOutlineHeart />
          <RiMoreFill />
        </div>
      </div>
    </>
  );
};

export default Song;