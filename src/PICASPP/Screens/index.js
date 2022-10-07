import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

function Screens() {
  return (
    <div>
      <TopNav />
      <Outlet />
    </div>
  )
}

export default Screens;