import {useEffect, useState} from "react";
import ApiResponseText from "./ApiResponseText";

const Login = ({api_link }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("")
  var token_var = ""

  let handleSubmit = async (e) => {
    e.preventDefault();

    let body = JSON.stringify({
        username: username,
        password: password,
      });
    try {
      let res = await fetch("http://104.45.183.75/authentication/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: body,
      });
      let resJson = await res.text();
      console.log(0)
      const resJsonParsed = JSON.parse(resJson)
      console.log(1)
      if (res.status === 200) {
        setPassword("");
        token_var = resJsonParsed.token;
        setToken(token_var);
        setMessage("The token value is: " + token_var);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
          />
          <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>

        <div className="Users">
          <ApiResponseText
              text="Seznam uporabnikov "
              api_link="http://104.45.183.75/posts/users"
          />
        </div>

      </div>
  );
}


export default Login
