import { assets } from "../assets";

const NavBar = () => {
    return ( 
        <nav className="container flex justify-between px-5 items-center py-4">
            <img className="icon cursor-pointer md:hidden" src={assets.menuIcon} alt="" />
            <div className="text-[#ececec] text-md font-bold flex gap-1">AbdulGPT <img src={assets.chevron} alt="" /></div>
        <div className="icon text-[#ececec] bg-teal-600 text-xs flex justify-center items-center">AB</div>
        </nav>
     );
}
 
export default NavBar;