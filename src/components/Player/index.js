import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { RiMoreFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { readSong, setCurrentIndex } from "../../store/features/songSlice";
import Icon from "../Icon";
import Song from "./components/Song";
import "react-h5-audio-player/lib/styles.css";
import { Button, Popover } from "antd";
import Lyric from "./Lyric";

const Player = () => {
  const [id, setId] = useState("");

  const { songs } = useSelector((state) => state.songReducer);
  const dispatch = useDispatch();

  const handlePlaySong = (id, index, lyric) => {
    console.log(lyric);
    setId(id);
    dispatch(readSong(id));
    dispatch(setCurrentIndex(index));
  };

  return (
    <>
      <div className="player w-[330px] right-0 bottom-0 relative px-3 h-screen">
        <div className="player-header py-[14px] h-[70px] items-center">
          <div className="level flex items-center justify-between">
            <div className="level-right flex w-full">
              <div className="level-item w-full border-2 p-1 h-10 items-center flex justify-between rounded-full border-[#91819b] bg-[#91819b]">
                <button className="btn-list-player text-sm h-full w-full p-1 font-semibold active:bg-[#604d6c] active:rounded-full">
                  Danh sách phát
                </button>
                <button className="btn-player-history text-sm h-full w-full p-1 font-semibold active:bg-[#604d6c] active:rounded-full">
                  Nghe gần đây
                </button>
              </div>
            </div>
            <div className="level-left">
              <div className="level-item">
                <div className="icons flex items-center">
                  <Icon element={<BiTimeFive className="h-7 w-7" />} />
                  <Icon element={<RiMoreFill className="h-7 w-7" />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="player-scroll p-2">
          {songs.map((item, index, lyric) => (
            <>
              <Popover placement="bottom" content={<Lyric id={id} lyric="abc" />} trigger="click">
                <div
                  className="select-song"
                  key={index}
                  onClick={() => handlePlaySong(item._id, index, item.lyric)}
                >
                  <Song image={item?.image} title={item?.title} singer={item?.singerId?.fullname} />
                </div>
              </Popover>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Player;
