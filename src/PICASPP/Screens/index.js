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
    <div className=" text-center">
      < AddPictureForm onSubmission={handleUpdate}/>
      <TopNav />
      <Outlet />
    </div>
  )
}

export default Screens;