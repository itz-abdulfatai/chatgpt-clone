import SidebarBtn from "./SidebarBtn";
import { assets } from "../assets";
import SessionList from "./SessionList";
const Menu = () => {
    return ( 
        <div className=" flex flex-col items-stretch mt-4 overflow-y-auto" >
            <div className=" flex flex-col items-stretch px-1 h-[155px] justify-between">
                <SidebarBtn icon={assets.chatgpt} hasDot={false} hasEdit={true} text="ChatGPT"/>
                <SidebarBtn icon={assets.veed} hasDot={true} hasEdit={true} text="Video GPT by VEED"/>
                <SidebarBtn icon={assets.dalleE} hasDot={true} hasEdit={true} text="DALL-E"/>
                <SidebarBtn icon={assets.grid} hasDot={false} hasEdit={false} text="Explore GPTs"/>

            </div>
            <SessionList/>
           
        </div>
    
    );
}
 
export default Menu;