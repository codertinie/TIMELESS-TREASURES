import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const Home = () => {
  const [pictures, setPictures] = useState([])
  useEffect(() => {
    fetch("http://localhost:8001/pictures")
      .then(resp => resp.json())
      .then(setPictures)
    console.log(pictures)
  }, [])




  return (
    <div className=" flex flex-row flex-wrap gap-x-4 gap-y-3 place-content-center">
      {pictures.map((pic, id) => {
        return <div key={id} className=" rounded-lg flex flex-col shadow-lg">
          <img className="w-96" src={pic.url} />
        </div>
      })}
    </div>
  )
}

export default Home;