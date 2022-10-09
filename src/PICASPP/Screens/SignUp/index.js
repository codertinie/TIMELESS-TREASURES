const SignUp = () => {

function handlesubmit(e){
  e.preventDefault()
  alert("Thank you for registration. Please check your email for verification")
}

  return (
    <div className=" p-28 flex flex-col gap-y-4 items-stretch">
      <form onSubmit={handlesubmit}>
      <div>
        <input className=" bg-slate-500"></input>
        <label>Enter Email</label>
      </div>
      <div className=" p-6">
        <input type="password" required className=" bg-slate-500"></input>
        <label>Password</label>
      </div>
      <div>
        <button type="submit" className=" rounded-lg text-lg
        transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >Register</button>
      </div>
      </form>
    </div>
  )
}

export default SignUp;