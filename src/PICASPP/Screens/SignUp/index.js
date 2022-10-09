import { useState } from "react"

const SignUp = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [username, setUserName] = useState("")

function handlesubmit(e){
  e.preventDefault()
  alert(`Thank you ${username} for choosing us. Please check your email for verification`)
  // to reset the form after submission
  setEmail("")
  setPassword("")
  setUserName("")
}

  return (
    <div className=" p-28 flex flex-col gap-y-4 items-stretch text-lg font-sans">
      <form onSubmit={handlesubmit}>
      <div>
        <input onChange={e => setEmail(e.target.value)} value={email}
         type="email" required className=" bg-slate-500"></input>
        <label>Enter Email</label>
      </div>
      <div className=" p-6">
        <input onChange={e => setUserName(e.target.value)} value={username}
        required className=" bg-slate-500"></input>
        <label>Enter Username</label>
      </div>
      <div>
        <input onChange={e => setPassword(e.target.value)} value={password}
         type="password" required className=" bg-slate-500"></input>
        <label>Password</label>
      </div>
      <div className=" p-6">
        <button type="submit" className=" rounded-lg text-lg
        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >Register</button>
      </div>
      </form>
    </div>
  )
}

export default SignUp;