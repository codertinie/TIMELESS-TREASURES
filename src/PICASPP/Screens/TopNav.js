import { useLocation, useNavigate } from "react-router-dom";

const TopNav = () => {
  //location will help us get the current location
  const location = useLocation();
  console.log(location)

  return null
}

export default TopNav;