import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

function Screens() {
  return (
    <div className=" text-center">
      <TopNav />
      <Outlet />
    </div>
  )
}

export default Screens;