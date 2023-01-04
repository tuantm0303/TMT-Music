import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt, BiSearchAlt2 } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { RiVipDiamondLine } from "react-icons/ri";
import { AiOutlineSetting, AiOutlineUpload } from "react-icons/ai";
import Icon from "../Icon";

const Header = () => (
  <>
    <header className="header h-[70px] px-[60px] items-center flex flex-grow-[1]">
      <div className="level flex position z-1 w-full justify-between">
        <div className="level-left items-center flex">
          <div className="back">
            <BiLeftArrowAlt className="text-4xl" />
          </div>
          <div className="next">
            <BiRightArrowAlt className="text-4xl" />
          </div>
          <form className="btn-search ml-5 flex border p-5 items-center bg-[#2F2739] rounded-full h-12 w-[440px] border-none">
            <button className="btn-search ml-2">
              <BiSearchAlt2 className="text-3xl" />
            </button>
            <input
              type="text"
              className="bg-[#2F2739] h-5 w-full rounded-full"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
          </form>
        </div>
        <div className="level-right text-right">
          <div className="list-icon flex items-center">
            <Icon
              element={
                <FaTshirt className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-[#2a1151]" />
              }
            />
            <Icon element={<RiVipDiamondLine className="h-8 w-8" />} />
            <Icon element={<AiOutlineUpload className="h-8 w-8" />} />
            <Icon element={<AiOutlineSetting className="h-8 w-8" />} />
            <div className="img-user">
              <img
                src="https://s120.avatar.talk.zdn.vn/5/f/9/7/7/120/3f9907e2310087063774d0940e4a62ab.jpg"
                alt=""
                className="w-[30px] border rounded-full border-none mx-2 m-1"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
