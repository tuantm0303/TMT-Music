import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { GiMusicalKeyboard } from "react-icons/gi";
import { RiMoreFill } from "react-icons/ri";
import { BsFillVolumeUpFill, BsMic, BsPlayCircle } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { FcMusic } from "react-icons/fc";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { CiRepeat } from "react-icons/ci";
import Song from "../Player/components/Song";
import { Slider } from "antd";

const Playing = () => {
  return (
    <div className="playing fixed flex w-full justify-between items-center bg-[#130C1C] text-white h-[90px] z-[9999] bottom-0">
      <div className="playing-left flex flex-grow">
        <div className="media pl-4 w-[300px] h-16">
          <Song title="Không tán tỉnh em đâu" singer="Tùng TeA, PC " />
        </div>
        <div className="icon flex w-[45px] justify-between items-center">
          <AiFillHeart style={{ width: 20, height: 20 }} />
          <RiMoreFill style={{ width: 20, height: 20 }} />
        </div>
      </div>
      <div className="playing-center w-full px-5 flex-grow block">
        <div className="action flex justify-center items-center">
          <svg
            style={{ width: 30, height: 30 }}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              id="feRandom0"
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeWidth="1"
            >
              <g id="feRandom1" fill="currentColor">
                <path
                  id="feRandom2"
                  d="M4 17a1 1 0 0 1 0-2h2l3-3l-3-3H4a1.001 1.001 0 0 1 0-2h3l4 4l4-4h2V5l4 3.001L17 11V9h-1l-3 3l3 3h1v-2l4 3l-4 3v-2h-2l-4-4l-4 4H4Z"
                ></path>
              </g>
            </g>
          </svg>
          <BiSkipPrevious style={{ width: 30, height: 30 }} />
          <BsPlayCircle style={{ width: 50, height: 50 }} />
          <BiSkipNext style={{ width: 30, height: 30 }} />
          <CiRepeat style={{ width: 30, height: 30 }} />
        </div>
        <div className="time-song flex justify-center items-center">
          <div className="time-left mr-2">00:01</div>
          <Slider defaultValue={30} style={{ width: 600 }} />
          <div className="time-right ml-2">03:12</div>
        </div>
      </div>
      <div className="playing-right flex flex-grow justify-end w-[345px] pr-10">
        <GiMusicalKeyboard style={{ width: 20, height: 20, margin: 10 }} />
        <BsMic style={{ width: 20, height: 20, margin: 10 }} />
        <SlScreenDesktop style={{ width: 20, height: 20, margin: 10 }} />
        <BsFillVolumeUpFill style={{ width: 20, height: 20, margin: 10 }} />
        <Slider defaultValue={30} style={{ width: 100 }} />
        <FcMusic style={{ width: 20, height: 20, margin: 10 }} />
      </div>
    </div>
  );
};

export default Playing;
