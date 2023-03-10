import React from "react";
import Song from "../../../components/Player/components/Song";
import Banner from "../../../components/Banner";
import { useSelector } from "react-redux";

const Home = () => {
  const { songs } = useSelector((state) => state.songReducer);
  return (
    <>
      <main className="main-board pt-8 px-10">
        <Banner />
        <div className="playlist pt-10">
          <h3 className="title font-bold text-xl">Có Thể Bạn Muốn Nghe</h3>
          <div className="container-playlist flex justify-between pt-5">
            <div className="item-playlist w-[181px]">
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/0/4/c/504c9667858918caac5f16ac59a8249a.jpg"
                alt=""
                className="w-[181px] h-[181px] rounded-lg hover:opacity-30 hover:transition-opacity hover:scale-105 hover:delay-200"
              />
              <h5 className="item-title font-bold pt-3 hover:text-purple-400">
                Rap Việt Mới Nhất
              </h5>
              <span className="item-desc opacity-50 pt-1 hover:text-purple-500">
                Phúc Du, Wxrdie, Gill...
              </span>
            </div>
            <div className="item-playlist w-[181px]">
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/4/a/4/c4a49230fc66035a8084e03b86c26355.jpg"
                alt=""
                className="w-[181px] h-[181px] rounded-lg hover:opacity-30 hover:transition-opacity hover:scale-105 hover:delay-200 hover:"
              />
              <h5 className="item-title font-bold pt-3 hover:text-purple-400">
                Rap Việt Cực Chất
              </h5>
              <span className="item-desc opacity-50 pt-1 hover:text-purple-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </div>
            <div className="item-playlist w-[181px]">
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/d/c/7/9dc7369b5d20139a5115c2976af79391.jpg"
                alt=""
                className="w-[181px] h-[181px] rounded-lg hover:opacity-30 hover:transition-opacity hover:scale-105 hover:delay-200 hover:"
              />
              <h5 className="item-title font-bold pt-3 hover:text-purple-400">
                Tản Mạn Cùng Indie Việt
              </h5>
              <span className="item-desc opacity-50 pt-1 hover:text-purple-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="item-playlist w-[181px]">
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/1/c/e/a1ce1ab6ccc1b7d79cff6829234c598e.jpg"
                alt=""
                className="w-[181px] h-[181px] rounded-lg hover:opacity-30 hover:transition-opacity hover:scale-105 hover:delay-200 hover:"
              />
              <h5 className="item-title font-bold pt-3 hover:text-purple-400">
                Ngày Ấy Và Bây Giờ
              </h5>
              <span className="item-desc opacity-50 pt-1 hover:text-purple-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="item-playlist w-[181px]">
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/f/d/9/0fd9b31be9f3a067f8e05e4d8a1f28a9.jpg"
                alt=""
                className="w-[181px] h-[181px] rounded-lg hover:opacity-30 hover:transition-opacity hover:scale-105 hover:delay-200 hover:"
              />
              <h5 className="item-title font-bold pt-3 hover:text-purple-400">
                Rap Việt Mới Nhất
              </h5>
              <span className="item-desc opacity-50 pt-1 hover:text-purple-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>

        <div className="new-section pt-5">
          <div className="title-section font-bold text-xl">Mới Phát Hành</div>
          <ul className="genre-select flex py-5 justify-start">
            <li className="selector text-xs">
              <button className="rounded-full border-2 p-1 px-4 active:bg-violet-700 hover:opacity-30">
                TẤT CẢ
              </button>
            </li>
            <li className="selector mx-8 text-xs">
              <button className="rounded-full border-2 p-1 px-4 active:bg-violet-700 hover:opacity-30">
                VIỆT NAM
              </button>
            </li>
            <li className="selector text-xs">
              <button className="rounded-full border-2 p-1 px-4 active:bg-violet-700 hover:opacity-30">
                QUỐC TẾ
              </button>
            </li>
          </ul>
          <div className="song-section grid grid-cols-3 grid-rows-3">
            {songs.map((item, index) => (
              <Song
                key={index}
                image={item?.image}
                title={item?.title}
                singer={item?.singerId?.fullname}
                time={item?.time}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
