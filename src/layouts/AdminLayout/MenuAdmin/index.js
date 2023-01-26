import React from "react";
import { UserOutlined, StockOutlined } from "@ant-design/icons";
import { GiMusicSpell } from "react-icons/gi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import config from "../../../config";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <Link to={config.routes.dashboard}>Thống kê</Link>,
    "dashboard",
    <StockOutlined />
  ),
  getItem(
    <Link to={config.routes.adminUserList}>Danh sách người dùng</Link>,
    "adminUser",
    <UserOutlined />
  ),
  getItem("Quản lí thể loại", "adminCategory", <BiCategoryAlt />, [
    getItem(
      <Link to={config.routes.adminCategoryList}>Danh sách thể loại</Link>,
      "adminCategory1"
    ),
    getItem(
      <Link to={config.routes.adminCategoryAdd}>Thêm thể loại</Link>,
      "adminCategory2"
    ),
  ]),
  getItem("Quản lí bài hát", "adminSong", <GiMusicSpell />, [
    getItem(
      <Link to={config.routes.adminSongList}>Danh sách bài hát</Link>,
      "adminSong1"
    ),
    getItem(
      <Link to={config.routes.adminSongAdd}>Thêm bài hát</Link>,
      "adminSong2"
    ),
  ]),
  getItem("Quản lí ca sĩ", "adminSinger", <FaMicrophoneAlt />, [
    getItem(
      <Link to={config.routes.adminSingerList}>Danh sách ca sĩ</Link>,
      "adminSinger1"
    ),
    getItem(
      <Link to={config.routes.adminSingerAdd}>Thêm ca sĩ</Link>,
      "adminSinger2"
    ),
  ]),
];
const MenuAdmin = () => {
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      defaultOpenKeys={["sub1"]}
    />
  );
};
export default MenuAdmin;
