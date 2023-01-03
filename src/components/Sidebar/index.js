import React, { useState } from "react";
import { FcMusic } from "react-icons/fc";
import { FiMusic } from "react-icons/fi";
import { RiPlayListLine } from "react-icons/ri";
import { GiLoveSong, GiMusicalKeyboard } from "react-icons/gi";
import { BiCategory, BiCircle, BiNews, BiRadio, BiTime } from "react-icons/bi";
import { MdStackedLineChart } from "react-icons/md";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);

  const Toggle = () => {
    console.log(isActive);
    setActive(true);
  };
  return (
    <>
      <aside className="side-bar w-[240px] bg-[#231B2E] h-screen">
        <div className="logo px-[25px] w-full">
          <img
            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
            alt=""
            className="h-[70px]"
          />
        </div>
        <ul className="sidebar-list-menu">
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <FcMusic className="icon mr-2" />
            <span className="sider_menu-item-title">Cá Nhân</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <BiCircle className="icon mr-2" />
            <span className="sider_menu-item-title">Khám phá</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <MdStackedLineChart className="icon mr-2" />
            <span className="sider_menu-item-title">#zingchart</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <BiRadio className="icon mr-2" />
            <span className="sider_menu-item-title">Radio</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <BiNews className="icon mr-2" />
            <span className="sider_menu-item-title">Theo dõi</span>
          </button>
        </ul>
        <div className="py-2">
          <hr className="w-9/12 mx-auto" />
        </div>
        <ul className="side-bar-bottom">
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <FiMusic className="icon mr-2" />
            <span className="sider_menu-item-title">Nhạc mới</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <BiCategory className="icon mr-2" />
            <span className="sider_menu-item-title">Thể loại</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <MdStackedLineChart className="icon mr-2" />
            <span className="sider_menu-item-title">TOP 100</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <GiMusicalKeyboard className="icon mr-2" />
            <span className="sider_menu-item-title">MV</span>
          </button>
          <div className="premium border-none rounded bg-gradient-to-r from-blue-700 to-purple-800 p-2 mx-6">
            <div className="title text-center text-xs font-bold text-white">
              Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </div>
            <button className="items-center btn text-sm font-semibold h-7 bg-yellow-400 rounded-full w-full mt-2 hover:bg-yellow-600 hover:cursor-pointer">
              NÂNG CẤP VIP
            </button>
          </div>
        </ul>
        <ul className="side-bar-library">
          <div className="title-library text-white py-4 pl-8 font-bold">
            THƯ VIỆN
          </div>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <GiLoveSong className="icon mr-2" />
            <span className="sider_menu-item-title">Bài hát</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <RiPlayListLine className="icon mr-2" />
            <span className="sider_menu-item-title">Playlist</span>
          </button>
          <button
            onClick={() => Toggle()}
            className={
              isActive == true
                ? `item-name pl-8 flex text-white py-3 items-center w-full active:bg-violet-700`
                : `item-name pl-8 flex text-white py-3 items-center w-full`
            }
          >
            <BiTime className="icon mr-2" />
            <span className="sider_menu-item-title">Gần đây</span>
          </button>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
