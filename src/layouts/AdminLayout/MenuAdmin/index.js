import React from "react";
import { UserOutlined, StockOutlined } from "@ant-design/icons";
import { GiMusicSpell } from "react-icons/gi";
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
];
const MenuAdmin = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
      onClick={onClick}
      style={{
        backgroundColor: "#252C47",
      }}
      defaultOpenKeys={["sub1"]}
    />
  );
};
export default MenuAdmin;
