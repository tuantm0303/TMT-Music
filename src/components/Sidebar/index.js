import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ButtonSidebar from "./components/ButtonSidebar";
import ItemLink from "./components/Link";

const Sidebar = () => {
  return (
    <aside className="side-bar w-[240px] bg-[#231B2E] h-screen relative z-[100]">
      <div className="logo px-[25px] w-full">
        <img
          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          alt=""
          className="h-[70px] w-10/12"
        />
      </div>
      <div className="sidebar pb-2">
        <ItemLink location="sidebar_top" />
      </div>
      <div className="sidebar-divide relative h-[2px] w-10/12 mx-auto bg-gray-500"></div>
      <ul className="sidebar-bottom pt-2">
        <ItemLink location="sidebar_mid" />
        <div className="premium border-none rounded bg-gradient-to-r from-blue-700 to-purple-800 p-2 my-2 mx-6">
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
        <ItemLink location="sidebar_bot" />
      </ul>
      <div className="create-playlist bg-[#231B2E] fixed bottom-[90px] left-0 border-t-2 w-[240px] h-55px border-gray-500">
        <ButtonSidebar icon={<AiOutlinePlus />} title={"Tạo playlist mới"} />
      </div>
    </aside>
  );
};

export default Sidebar;
