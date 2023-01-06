import React from "react";
import { FcMusic } from "react-icons/fc";
import { FiMusic } from "react-icons/fi";
import { RiPlayListLine } from "react-icons/ri";
import { GiLoveSong, GiMusicalKeyboard } from "react-icons/gi";
import { BiCategory, BiCircle, BiNews, BiRadio, BiTime } from "react-icons/bi";
import { MdStackedLineChart } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import ButtonSidebar from "../ButtonSidebar";
import { Link } from "react-router-dom";
import config from "../../config";

const Sidebar = () => {
  return (
    <>
      <aside className="side-bar w-[240px] bg-[#231B2E] h-screen relative z-[100]">
        <div className="logo px-[25px] w-full">
          <img
            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
            alt=""
            className="h-[70px] w-10/12"
          />
        </div>
        <div className="sidebar pb-2">
          <Link to={config.routes.mymusic}>
            <ButtonSidebar element={<FcMusic />} title="Cá nhân" />
          </Link>
          <Link to={config.routes.home}>
            <ButtonSidebar element={<BiCircle />} title="Khám phá" />
          </Link>
          <Link to={config.routes.zingchart}>
            <ButtonSidebar
              element={<MdStackedLineChart />}
              title="#zingchart"
            />
          </Link>
          <Link to={config.routes.radio}>
            <ButtonSidebar element={<BiRadio />} title="Radio" />
          </Link>
          <Link to={config.routes.follow}>
            <ButtonSidebar element={<BiNews />} title="Theo dõi" />
          </Link>
        </div>
        <div className="sidebar-divide relative h-[2px] w-10/12 mx-auto bg-gray-500"></div>
        <ul className="sidebar-bottom pt-2">
          <Link to={config.routes.musicNew}>
            <ButtonSidebar element={<FiMusic />} title="Nhạc mới" />
          </Link>
          <Link to={config.routes.category}>
            <ButtonSidebar element={<BiCategory />} title={"Thể loại"} />
          </Link>
          <Link to={config.routes.top100}>
            <ButtonSidebar element={<MdStackedLineChart />} title={"TOP 100"} />
          </Link>
          <Link to={config.routes.mv}>
            <ButtonSidebar element={<GiMusicalKeyboard />} title={"MV"} />
          </Link>
          <div className="premium border-none rounded bg-gradient-to-r from-blue-700 to-purple-800 p-2 mx-6">
            <div className="title text-center text-xs font-bold">
              Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </div>
            <button className="items-center btn text-sm font-semibold h-7 bg-yellow-400 rounded-full w-full mt-2 hover:bg-yellow-600 hover:cursor-pointer">
              NÂNG CẤP VIP
            </button>
          </div>
        </ul>
        <ul className="sidebar-library">
          <div className="title-library py-4 pl-8 font-bold">THƯ VIỆN</div>
          <Link to={config.routes.song}>
            <ButtonSidebar element={<GiLoveSong />} title={"Bài hát"} />
          </Link>
          <Link to={config.routes.playlist}>
            <ButtonSidebar element={<RiPlayListLine />} title={"Playlist"} />
          </Link>
          <Link to={config.routes.history}>
            <ButtonSidebar element={<BiTime />} title={"Gần đây"} />
          </Link>
        </ul>
        <div className="create-playlist bg-[#231B2E] fixed bottom-0 left-0 border-t-2 w-[240px] h-55px border-gray-500">
          <ButtonSidebar
            element={<AiOutlinePlus />}
            title={"Tạo playlist mới"}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
