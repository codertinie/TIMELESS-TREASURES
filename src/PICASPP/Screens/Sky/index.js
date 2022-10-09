import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sky=()=>{
  const [pics, setPics] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:8001/pictures")
    .then (resp => resp.json())
    .then(setPics)
  },[])

  const skyPics = pics.filter(obj => {
    return obj.category === "sky";
  })
  return (
    <div className=" flex flex-row flex-wrap gap-x-4 gap-y-3 place-content-center">
    {skyPics.map((pic, id) => {
      return <div onClick={() => navigate(`/${pic.id}`)}
      key={id} className=" rounded-lg flex flex-col shadow-lg">
        <img className="w-96" src={pic.url} />
      </div>
    })}
  </div>
  )
  
  };
  
  export default Sky;