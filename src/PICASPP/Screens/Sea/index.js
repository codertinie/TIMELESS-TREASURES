import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sea=()=>{
const [pictures, setPictures] = useState([])
const navigate = useNavigate()

  useEffect(()=>{
    fetch("http://localhost:8001/pictures")
    .then (resp => resp.json())
    .then (setPictures)
  },[])

  const seaPics = pictures.filter(obj => {
    return obj.category === "sea";
  })
  
    return (
      <div className=" flex flex-row flex-wrap gap-x-4 gap-y-3 place-content-center">
      {seaPics.map((pic, id) => {
        return <div onClick={() => navigate(`/${pic.id}`)}
        key={id} className=" rounded-lg flex flex-col shadow-lg">
          <img className="w-96" src={pic.url} />
        </div>
      })}
    </div>
    )
  
  };
  
  export default Sea;