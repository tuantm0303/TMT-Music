import React, { useState } from "react";

const ButtonSidebar = ({ element, title }) => {
  const classBtn = "item-name pl-8 flex py-3 items-center w-full ";
  const [isActive, setActive] = useState(true);

  const Toggle = () => {
    setActive(true);
  };
  return (
    <>
      <button
        onClick={() => Toggle()}
        className={
          isActive === true
            ? `${classBtn} active:bg-violet-700 opacity-50 hover:opacity-90`
            : `${classBtn}`
        }
      >
        <div className="icon mr-2 font-bold">{element}</div>
        <span className="sider_menu-item-title font-semibold">{title}</span>
      </button>
    </>
  );
};

export default ButtonSidebar;
