import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { CiMusicNote1 } from "react-icons/ci";
import Song from "../../components/Player/components/Song";

const MyMusic = () => {
  return (
    <>
      <main className="main-board pt-16 px-10">
        <div className="title flex">
          <span className="text-6xl font-bold pr-4">Thư viện</span>
          <BsPlayCircle className="text-6xl font-bold rounded-full bg-violet-700 hover:opacity-50" />
        </div>

        <ul className="menu flex pt-16 justify-items-start border-b-2 border-b-gray-500 pb-3">
          <li className="pr-8 hover:opacity-90 active:border-2">BÀI HÁT</li>
          <li className="pr-8 hover:opacity-90 active:border-2">PODCAST</li>
          <li className="pr-8 hover:opacity-90 active:border-2">ALBUM</li>
          <li className="pr-8 hover:opacity-90 active:border-2">MV</li>
        </ul>
        <ul className="genre-select flex py-5 justify-start">
          <li className="selector text-xs">
            <button className="rounded-full border-2 p-1 px-4 active:bg-violet-700 hover:opacity-30">
              YÊU THÍCH
            </button>
          </li>
          <li className="selector mx-8 text-xs">
            <button className="rounded-full border-2 p-1 px-4 active:bg-violet-700 hover:opacity-30">
              ĐÃ TẢI LÊN
            </button>
          </li>
        </ul>

        <div className="media header flex justify-around pb-4 border-b-2 border-b-gray-500 pt-5">
          <h3 className="media-right opacity-50">BÀI HÁT</h3>
          <h3 className="media-mid opacity-50">ALBUM</h3>
          <h3 className="media-left opacity-50">THỜI GIAN</h3>
        </div>
        <div className="media-container">
          <div className="media-song border-b-2 border-b-gray-500 flex items-center hover:bg-slate-500 hover:rounded-lg">
            <CiMusicNote1 className="w-8" />
            <Song title="Già Cùng Nhau Là Được" singer="Tây Nguyên Sound" />
          </div>
          <div className="media-song border-b-2 border-b-gray-500 flex items-center hover:bg-slate-500 hover:rounded-lg">
            <CiMusicNote1 className="w-8" />
            <Song title="Già Cùng Nhau Là Được" singer="Tây Nguyên Sound" />
          </div>
        </div>
      </main>
    </>
  );
};

export default MyMusic;
