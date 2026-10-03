import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  let [userName, setUserName] = useState("");
  let [pass, setPass] = useState("");
  let [email, setEmail] = useState("");
  const navigate =  useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault();

    console.log(userName,pass,email)

    if(!userName || !pass || !email)
    {
      toast.warning("please fill all the fields")
      return;
    }

    localStorage.setItem("userName",userName)
    localStorage.setItem("userPass",pass)
    localStorage.setItem("userEmail",email)

    toast.success("form is submitted",{
      autoClose:800
    });
    
    setEmail("")
    setPass("")
    setUserName("")

    setTimeout(()=>{
      navigate("/login")
    },1000)

  };

  return (
    <div className="signup">
      <h1>signup page</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">name</label>
        <input
          type="text"
          placeholder="your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="">email</label>
        <input
          type="text"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">password</label>
        <input
          type="text"
          placeholder="your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button>signup</button>
      </form>

      <footer>
        <p>already have an account ?</p>
        <Link to="/login">login</Link>

      </footer>
    </div>
  );
};

export default Signup;
