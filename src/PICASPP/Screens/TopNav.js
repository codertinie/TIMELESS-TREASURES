import { useLocation, useNavigate } from "react-router-dom";

const TopNav = () => {
  //location will help us get the current location
  const location = useLocation();
  console.log(location)

  return (
  <div className=" flex gap-x-10">
    <div className={`cursor-pointer 
    ${location.pathname === "/" ? " bg-orange-500" : ""}`}
    >HOME</div>
    <div className={`cursor-pointer 
    ${location.pathname === "/land" ? " bg-green-700" : ""}`}>LAND</div>
    <div className={`cursor-pointer 
    ${location.pathname === "/sea" ? " bg-blue-500" : ""}`}>SEA</div>
    <div className={`cursor-pointer 
    ${location.pathname === "/sky" ? " bg-blue-800" : ""}`}>SKY</div>
    <div className=" cursor-pointer">REGISTER</div>
  </div>
  )
}

export default TopNav;