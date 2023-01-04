import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMoreFill } from "react-icons/ri";

const Song = (prop) => {
  return (
    <>
      <div className="song flex items-center h-[56px] w-full p-2 hover:bg-slate-500 hover:rounded-lg">
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/d/8/9/8d8925bf78937c966bd9a25678a4dbe4.jpg"
          alt=""
          className="w-10 h-10 rounded-lg hover:opacity-60"
        />
        <div className="text pl-5 flex-grow-[1]">
          <p className="title-song font-bold">{prop.title}</p>
          <span className="singer opacity-60 hover:underline hover:text-purple-500">
            {prop.singer}
          </span>
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
