import React, { useContext } from "react";
import { categories } from "../utils/constants";
import LeftNavItem from "./LeftNavItem";
import { Context } from "../context/Contextapi";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { selectCategory, setSelectCategory, mobileMenu } = useContext(Context);
  const navigate = useNavigate();

  const handleSearchCategory = (name, type) => {
    switch (type) {
      case "home":
        setSelectCategory(name);
        navigate("/");
        console.log(selectCategory);
        break;
      case "category":
        setSelectCategory(name);
        navigate("/");
        console.log(selectCategory);
        break;
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-[calc(100vh-56px)] py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-[0]" : "translate-x-[-240px]"
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavItem
                title={item.name === "New" ? "Home" : item.name}
                icon={item.icon}
                type={item.type}
                action={() => {
                  handleSearchCategory(item.name, item.type);
                }}
                classname={
                  selectCategory === item.name ? "bg-white/[0.15]" : ""
                }
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          @Copyright : Akshat Antahal
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
