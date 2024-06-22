import { assets } from "../assets";

const SidebarBtn = ({ text, hasDot, hasEdit, icon }) => {
  return (
    <>
      <button className=" group w-full rounded-md p-1 flex items-center justify-between text-[#ececec] text-xs hover:bg-[#212121] min-h-[40px] ">
        <div className="flex items-center max-w-[85%]">
          {icon && <img className="icon" src={icon} alt="" />}
          <p className=" line-clamp-1">{text}</p>
        </div>
        <div className="hidden items-center  group-hover:flex">
          {hasDot && <img className="icon" src={assets.dots} alt="" />}
          {hasEdit && <img className="icon" src={assets.edit} alt="" />}
        </div>
      </button>
    </>
  );
};

export default SidebarBtn;
