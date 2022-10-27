import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpdiv from "./SignUpdiv";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="dogPic">
    <div id="formBodyLogin">
    <div id="formContainerLogin">
    <div id="fullFormLogin">
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <br/>
          <p>
            Don't have an account? &nbsp;
            <button  color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpdiv onLogin={onLogin} />
          <br/>
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
    </div>
    </div>
    </div>
  );
}

export default Login;