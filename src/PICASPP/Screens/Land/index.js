import { useState, useEffect } from "react";

const Land=()=>{
  const [pictures, setPictures] = useState([])

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
        return <div key={id} className=" rounded-lg flex flex-col shadow-lg">
          <img className="w-96" src={pic.url} />
        </div>
      })}
    </div>
    )
  
  };
  
  export default Land;