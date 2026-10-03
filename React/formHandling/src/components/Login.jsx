import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPass, setLoginPass] = useState("");
  const navigate = useNavigate()


  let handleSubmit =(e)=>{
    e.preventDefault()

    console.log({loginEmail,loginPass})

    if(!loginEmail || !loginPass)
    {
       toast.warning("please fill all the fields",{
        autoClose:1000
       })
       return ;
    }

    // get data from localstorage

    let userEmail = localStorage.getItem("userEmail")
    let userPass = localStorage.getItem("userPass")

    if(userEmail === loginEmail && userPass === loginPass)
    {
      toast.success("login done successfully",{
        autoClose:800
      })

      navigate("/home")

    }
    else
    {
      toast.error("wrong credentials",{
        autoClose:800
      })
    }

    setLoginEmail("")
    setLoginPass("")

  
  }

  return (
    <div className="loginContainer">
      <h1>login page</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">user Email</label>
        <input
          type="text"
          placeholder="your email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <label htmlFor="">user Pass</label>
        <input
          type="text"
          placeholder="your password"
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
        />

        <button>login</button>
      </form>

       <footer>
        
        <p>don't have an account ?</p>
        <Link to="/">signup</Link>

      </footer>
    </div>
  );
};

export default Login;
