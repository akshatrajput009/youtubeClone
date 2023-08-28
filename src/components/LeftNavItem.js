import React from "react";

const LeftNavItem = ({ title, icon, classname, action }) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-8 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        classname
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {title}
    </div>
  );
};

export default LeftNavItem;
