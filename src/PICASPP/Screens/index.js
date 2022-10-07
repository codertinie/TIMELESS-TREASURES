import { Outlet } from "react-router-dom";

function Screens() {
  return (
    <div>
      <div>TIMELESS TREASURES</div>
      <Outlet />
    </div>
  )
}

export default Screens;