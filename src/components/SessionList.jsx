import { conversations } from "../assets";
import SidebarBtn from "./SidebarBtn";
const SessionList = () => {
  return (
    <div className=" mt-5">
      {
        conversations.map((date, index) => (
            <div key={index} className=" mb-5">
                <h2 className=" text-[#ececec] capitalize text-sm ml-4">{date.date}</h2>
                <div className="flex flex-col items-stretch px-3 h-max justify-start">
                    {date.conversations.map((chat, index ) => (
                        <SidebarBtn key={index} text={chat.title} hasEdit={false} hasDot={true}/>
                    ))}
                </div>
            </div>
        ))
      
      
      }
    </div>
  );
};

export default SessionList;
