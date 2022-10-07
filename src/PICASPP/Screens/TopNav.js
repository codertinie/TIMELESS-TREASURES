import { useLocation, useNavigate } from "react-router-dom";

const TopNav = () => {
  //location will help us get the current location
  const location = useLocation();
  // declaring the navigation hook
  const navigate = useNavigate()
  console.log(location)

  return (
  <div className=" flex gap-x-10">
    <div onClick={() => navigate("")} className={`cursor-pointer 
    ${location.pathname === "/" ? " bg-orange-500" : ""}`}
    >HOME</div>
    <div onClick={() => navigate("/land")} className={`cursor-pointer 
    ${location.pathname === "/land" ? " bg-green-700" : ""}`}>LAND</div>
    <div onClick={() => navigate("/sea")} className={`cursor-pointer 
    ${location.pathname === "/sea" ? " bg-blue-500" : ""}`}>SEA</div>
    <div onClick={() => navigate("/sky")} className={`cursor-pointer 
    ${location.pathname === "/sky" ? " bg-blue-800" : ""}`}>SKY</div>
    <div onClick={() => navigate("/sign-up")} className=" cursor-pointer">REGISTER</div>
  </div>
  )
}

export default TopNav;