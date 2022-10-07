import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Home from "./Screens/Home";
import Land from "./Screens/Land";
import Sea from "./Screens/Sea";
import Sky from "./Screens/Sky";
import SinglePic from "./Screens/Singlepic";
import Screens from "./Screens";
import SignUp from "./Screens/SignUp";


const PICASAPP = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Screens />} >
          <Route path="" element={<Home />} />
          <Route path="land" element={<Land />} />
          <Route path="sea" element={<Sea />} />
          <Route path="sky" element={<Sky />} />
          <Route path="Sign-up" element={<SignUp />} />
          <Route path="/:id" element={<SinglePic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PICASAPP;