import React, { useState } from "react";

const Signup = () => {
  let [userName, setUserName] = useState("");
  let [pass, setPass] = useState("");
  let [email, setEmail] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();


    console.log(userName,pass,email)

    console.log("form is submitted");
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
    </div>
  );
};

export default Signup;
