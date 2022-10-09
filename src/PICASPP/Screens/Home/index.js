import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [pictures, setPictures] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:8001/pictures")
      .then(resp => resp.json())
      .then(setPictures)
    // console.log(pictures)
  }, [])

const filtered = pictures.filter(obj => {
  return obj.category === "land";
})

console.log(filtered)
//to handle individual images

  return (
    <div
    className=" flex flex-row flex-wrap gap-x-4 gap-y-3 place-content-center">
      {pictures.map((pic, id) => {
        return <div className=" rounded-lg flex flex-col shadow-lg
        transition ease-in-out delay-150 hover:-translate-y-8 hover:scale-110 duration-300 "
        onClick={() => navigate(`/${pic.id}`)}
       key={id} >
          <img className="w-96" src={pic.url} />
        </div>
      })}
    </div>
  )
}

export default Home;