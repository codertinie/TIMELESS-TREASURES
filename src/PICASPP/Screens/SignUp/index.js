const SignUp = () => {
  return (
    <div className=" p-4 flex flex-col gap-y-4 ">
      <div>
        <input className=" bg-slate-500"></input>
        <label>Enter Email</label>
      </div>
      <div>
        <input className=" bg-slate-500"></input>
        <label>Password</label>
      </div>
      <div>
        <button className=" bg-orange-200">Register</button>
      </div>
    </div>
  )
}

export default SignUp;