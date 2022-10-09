import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Land=()=>{
  const [pictures, setPictures] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:8001/pictures")
      .then(resp => resp.json())
      .then(setPictures)
      console.log(pictures)
  }, [])

  const filtered = pictures.filter(obj => {
    return obj.category === "land";
  })
  
  console.log(filtered)
    return (
      <div className=" flex flex-row flex-wrap gap-x-4 gap-y-3 place-content-center">
      {filtered.map((pic, id) => {
        // console.log(pic.description)
        return <div onClick={() => navigate(`/${pic.id}`)}  
        key={id} className=" rounded-lg flex flex-col shadow-lg">
          <img className="w-96" src={pic.url} />
          {/* <h2>{pic.description}</h2> */}
        </div>
      })}
    </div>
    )
  
  };
  
  export default Land;