import { useState } from "react";

function AddPictureForm({onSubmission}) {
const [formData, setFormData]= useState({
  url: "",
  description: "",
  category: ""
})

function handleChange(e){
  setFormData({...formData, [e.target.name]: e.target.value})
}

function handleSubmit(e){
  e.preventDefault()
  onSubmission(formData)
}
  return (
      <div >
        <form onChange={handleChange} onSubmit={handleSubmit}
        className=" flex space-x-4 mx-20 my-3 justify-center">
          <div className=" space-x-10 ">
            <input placeholder="url" className=" rounded-lg bg-slate-500" type="text" name="url"/>
            <input placeholder="description.." className=" rounded-lg bg-slate-500" name="description"/>
            <input placeholder="category" className=" rounded-lg bg-slate-500" name="category"/>
          </div>
          <button className=" rounded-lg text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          type="submit"> Add picture</button>
        </form>
      </div>
    )
}

export default AddPictureForm;