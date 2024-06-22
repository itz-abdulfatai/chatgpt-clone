import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className="h-screen bg-[#212121] grid grid-cols-5">
        {/* sidebar */}
        <div  className="   h-screen bg-[#171717]">
        <SideBar/>

        </div>
        <div className="col-span-4 flex flex-col">
            {/* navbar */}

        <NavBar/>
        
        {/* home page */}

        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>

        </div>


        




        
        </div>
    )
  }

  