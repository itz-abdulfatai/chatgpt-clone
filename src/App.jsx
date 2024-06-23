import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className=" h-screen bg-[#212121] grid grid-cols-5 md:grid-cols-6">
      <div className="   h-screen bg-[#171717] hidden md:block md:col-span-2 lg:col-span-1">
        <SideBar />
      </div>
      <div className=" col-span-6 md:col-span-4 lg:col-span-5 flex flex-col">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}
