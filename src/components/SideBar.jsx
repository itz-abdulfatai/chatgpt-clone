import { assets } from "../assets";
import Menu from "./Menu";

const SideBar = () => {
  return (
    <aside className=" flex flex-col px-2 py-4 h-screen">
      <div className="flex justify-between">
        <img
          className=" cursor-pointer hover:bg-[#212121] p-2 rounded"
          src={assets.sidebar}
          alt=""
        />
        <img
          className=" cursor-pointer hover:bg-[#212121] p-2 rounded"
          src={assets.edit}
          alt=""
        />
      </div>

      <Menu />

      <div className=" text-[#ececec] rounded-xl h-20 w-full flex justify-stretch items-stretch hover:bg-[#212121] px-3">
        <div className="flex items-center"><img src={assets.gen} alt="" className="icon border border-[#ececec]"/></div>
        <div className="flex flex-col justify-center ml-3">
            <h3 className="capitalize">update plan</h3>
            <p className=" text-slate-200 text-xs"> Get GPT-4, DALLE-E and more</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
