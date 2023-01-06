import React from "react";

const Icon = ({ element }) => {
  return (
    <>
      <div className="icon border-none p-1 m-1 mx-2 bg-[#2a1151] rounded-full">
        {element}
      </div>
    </>
  );
};

export default Icon;
