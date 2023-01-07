import React from "react";
import { useLocation } from "react-router-dom";

const ButtonSidebar = ({ icon, title, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to ? "bg-violet-700" : "";

  return (
    <button
      className={`item-name pl-8 flex py-3 items-center w-full hover:opacity-50 ${active}`}
    >
      <div className="icon mr-2 font-bold">{icon}</div>
      <span className="sider_menu-item-title font-semibold">{title}</span>
    </button>
  );
};

export default ButtonSidebar;
