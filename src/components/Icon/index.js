import React from "react";

const Icon = (prop) => {
  return (
    <>
      <div className="icon border-none p-1 m-1 mx-2 bg-[#2a1151] rounded-full">
        {prop.element}
      </div>
    </>
  );
};

export default Icon;
