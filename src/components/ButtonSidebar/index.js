import React, { useState } from "react";

const ButtonSidebar = (prop) => {
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
            ? `item-name pl-8 flex py-3 items-center w-full active:bg-violet-700`
            : `item-name pl-8 flex py-3 items-center w-full`
        }
      >
        <div className="icon mr-2 font-bold">{prop.element}</div>
        <span className="sider_menu-item-title font-semibold">
          {prop.title}
        </span>
      </button>
    </>
  );
};

export default ButtonSidebar;
