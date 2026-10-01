import React, { useState } from "react";

const Login = () => {
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPass, setLoginPass] = useState("");


  let handleSubmit =(e)=>{

    e.preventDefault()

    console.log({loginEmail,loginPass})
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
    </div>
  );
};

export default Login;
