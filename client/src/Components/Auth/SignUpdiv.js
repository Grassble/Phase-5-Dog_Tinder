import React, { useState } from "react";

function SignUpdiv({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div id="formBody">
    <div id="formContainer2">
    <form id="fullFormLogin" className="loginForm" onSubmit={handleSubmit}>
      <h1 className="formTitle" >Sign Up!</h1>
      <div>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          id="textName"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="textName"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <button id="submit" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </div>
      <div>
        {errors.map((err) => (
          <div key={err}>{err}</div>
        ))}
      </div>
    </form>
    </div>
    </div>
  );
}

export default SignUpdiv;