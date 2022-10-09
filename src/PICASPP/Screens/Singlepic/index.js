import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const SinglePic = () => {
  const route = useParams()

  const [picture, setPicture] = useState({
    url: "",
    description: "",
  })


  useEffect(() => {
    fetch(`http://localhost:8001/pictures/${route.id}`)
      .then(resp => resp.json())
      .then(setPicture)
  },[])

  return (
    <div className=" rounded-lg flex flex-col shadow-lg items-center">
      <img className=" w-6/12" src={picture.url} />
      <div className=" mx-20 text-lg text-left">{picture.description}</div>
    </div>

  )

};

export default SinglePic;