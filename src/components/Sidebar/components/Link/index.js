import React from "react";
import { FcMusic } from "react-icons/fc";
import { FiMusic } from "react-icons/fi";
import { RiPlayListLine } from "react-icons/ri";
import { GiLoveSong, GiMusicalKeyboard } from "react-icons/gi";
import { BiCategory, BiCircle, BiNews, BiRadio, BiTime } from "react-icons/bi";
import { MdStackedLineChart } from "react-icons/md";
import { Link } from "react-router-dom";
import config from "../../../../config";
import ButtonSidebar from "../ButtonSidebar";

const ItemLink = ({ location }) => {
  const listItem = [
    {
      link: config.routes.mymusic,
      title: "Cá nhân",
      icon: <FcMusic />,
      type: "sidebar_top",
    },
    {
      link: config.routes.home,
      title: "Khám phá",
      icon: <BiCircle />,
      type: "sidebar_top",
    },
    {
      link: config.routes.zingchart,
      title: "#zingchart",
      icon: <MdStackedLineChart />,
      type: "sidebar_top",
    },
    {
      link: config.routes.radio,
      title: "Radio",
      icon: <BiRadio />,
      type: "sidebar_top",
    },
    {
      link: config.routes.follow,
      title: "Theo dõi",
      icon: <BiNews />,
      type: "sidebar_top",
    },
    {
      link: config.routes.musicNew,
      title: "Nhạc mới",
      icon: <FiMusic />,
      type: "sidebar_mid",
    },
    {
      link: config.routes.category,
      title: "Thể loại",
      icon: <BiCategory />,
      type: "sidebar_mid",
    },
    {
      link: config.routes.top100,
      title: "TOP 100",
      icon: <MdStackedLineChart />,
      type: "sidebar_mid",
    },
    {
      link: config.routes.mv,
      title: "MV",
      icon: <GiMusicalKeyboard />,
      type: "sidebar_mid",
    },
    {
      link: config.routes.song,
      title: "Bài hát",
      icon: <GiLoveSong />,
      type: "sidebar_bot",
    },
    {
      link: config.routes.playlist,
      title: "Playlist",
      icon: <RiPlayListLine />,
      type: "sidebar_bot",
    },
    {
      link: config.routes.history,
      title: "Gần đây",
      icon: <BiTime />,
      type: "sidebar_bot",
    },
  ];

  return listItem.map((item, index) =>
    item.type === location ? (
      <Link to={item.link} key={index}>
        <ButtonSidebar to={item.link} title={item.title} icon={item.icon} />
      </Link>
    ) : null
  );
};

export default ItemLink;
