import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { RiMoreFill } from "react-icons/ri";
import Song from "../Song";

const Player = () => {
  return (
    <>
      <div className="player w-[330px] right-0 bottom-0 relative px-5 h-screen">
        <div className="player-header py-[14px] h-[70px] items-center flex">
          <div className="level flex items-center justify-between">
            <div className="level-right flex">
              <div className="level-item border-2 p-1 w-[233px] h-10 items-center flex justify-between rounded-full bg-[#91819b]">
                <button className="btn-list-player h-full w-full p-1 font-semibold active:bg-[#604d6c] active:rounded-full">
                  Danh sách phát
                </button>
                <button className="btn-player-history h-full w-full p-1 font-semibold active:bg-[#604d6c] active:rounded-full">
                  Nghe gần đây
                </button>
              </div>
            </div>
            <div className="level-left">
              <div className="level-item">
                <div className="icons flex items-center">
                  <BiTimeFive className="text-3xl text-white p-1 m-1 border-none bg-[#2a1151] rounded-full" />
                  <RiMoreFill className="text-3xl text-white p-1 m-1 border-none bg-[#2a1151] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="player-scroll p-2">
          <Song title="Chúng ta của hiện tại" singer="Sơn Tùng M-TP" />
          <Song title="Đứa nào làm em buồn" singer="Phúc Du" />
        </div>
      </div>
    </>
  );
};

export default Player;
