import { useState } from "react";
import { Outlet } from "react-router-dom";
import AddPictureForm from "./AddPictureForm";
import TopNav from "./TopNav";

function Screens() {
  const [pictures, setPictures] = useState([])

  function handleUpdate(newPicture){
    console.log(newPicture)
    const serverOptions = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(newPicture)
    }
    fetch("http://localhost:8001/pictures", serverOptions)
    .then(resp => resp.json())
    .then(newItem => setPictures(pictures => [...pictures, newItem]))
  }
  return (
    <div className=" mx-16 text-center bg-lime-100">
       <div className=' mx-5 text-center text-8xl font-link rounded-lg border-solid'>TIMELESS TREASURES</div>
      < AddPictureForm onSubmission={handleUpdate}/>
      <TopNav />
      <Outlet />
    </div>
  )
}

export default Screens;