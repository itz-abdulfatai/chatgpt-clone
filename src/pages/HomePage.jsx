import { useState } from "react";
import { assets } from "../assets";

const HomePage = () => {
  const [chatting, setChatting] = useState(false);
  const [typing, setTyping] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <main className=" flex-auto relative">
      <div className=" w-full h-full  flex justify-center items-center">
        {!chatting && (
          <div className="  w-[80%]  h-[80%] relative top-[-40px] flex flex-col justify-center items-center gap-10">
            <img className=" h-12 w-12" src={assets.chatgpt} alt="" />
            <div className="h-40 flex justify-center gap-5 w-full">
              <div className="w-[150px] text-[#cecece] text-sm text-opacity-80 h-24 ring-1 ring-[#cecece] ring-opacity-20 rounded-xl p-5 flex flex-col items-start justify-around hover:bg-[#2f2f2fe6] cursor-pointer">
                <img
                  src={assets.bulb}
                  alt=""
                  className="icon h-[1.6rem] w-[1.6rem]"
                />
                <div>Design a fun coding game</div>
              </div>
              <div className="w-[150px] text-[#cecece] text-sm text-opacity-80 h-24 ring-1 ring-[#cecece] ring-opacity-20 rounded-xl p-5 flex flex-col items-start justify-around hover:bg-[#2f2f2fe6] cursor-pointer">
                <img
                  src={assets.plane}
                  alt=""
                  className="icon h-[1.6rem] w-[1.6rem]"
                />
                <div>Experience a seoul like a local</div>
              </div>{" "}
              <div className="w-[150px] text-[#cecece] text-sm text-opacity-80 h-24 ring-1 ring-[#cecece] ring-opacity-20 rounded-xl p-5 flex flex-col items-start justify-around hover:bg-[#2f2f2fe6] cursor-pointer">
                <img
                  src={assets.bag}
                  alt=""
                  className="icon h-[1.6rem] w-[1.6rem]"
                />
                <div>Recommend a nice mall</div>
              </div>{" "}
              <div className="w-[150px] text-[#cecece] text-sm text-opacity-80 h-24 ring-1 ring-[#cecece] ring-opacity-20 rounded-xl p-5 flex flex-col items-start justify-around hover:bg-[#2f2f2fe6] cursor-pointer">
                <img
                  src={assets.littlePen}
                  alt=""
                  className="icon h-[1.6rem] w-[1.6rem]"
                />
                <div>give me ideas for a blog post</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" absolute bottom-0 left-0 right-0   h-20 flex flex-col items-center gap-1">
        <form
          action=""
          className=" w-[70%] rounded-full  flex justify-between items-center h-14 px-3 bg-[#2f2f2f] bg-opacity-90  "
        >
          <img className="icon " src={assets.attach} alt="" />
          <input
            type="text"
            placeholder="message chatGPT"
            className="flex-1 bg-transparent outline-none text-[#cecece]"
          />
          <img className="icon bg-black" src={assets.arrow} alt="" />
        </form>

        <p className=" text-xs text-[#ececec] opacity-80">
          ChatGPT can make mistakes. Check important info.
        </p>
        <div className="icon ring-1 ring-[#ececec] flex justify-center items-center absolute right-2 bottom-1 h-6 w-6 ring-opacity-70 cursor-pointer">
          ?
        </div>
      </div>
    </main>
  );
};

export default HomePage;
