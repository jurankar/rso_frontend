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
      const resJsonParsed = JSON.parse(resJson)
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


  // Submit Ratings
  const [user_id, setUser_id] = useState("");
  const [rating, setRating] = useState("");
  const [messageRating, setMessageRating] = useState("");
  let handleSubmitRating = async (e) => {
    e.preventDefault();

    let body = JSON.stringify({
      user_id: user_id*1,
      rating: rating*1,
    });
    try {
      let res = await fetch("http://104.45.183.75/posts/rate", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token
                },
        body: body,
      });
      let resJson = await res.text();
      setMessageRating(resJson);

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

        {token.length > 0 &&
          <form onSubmit={handleSubmitRating}>
            <input
                type="text"
                value={user_id}
                placeholder="User id"
                onChange={(e) => setUser_id(e.target.value)}
            />
            <input
                type="text"
                value={rating}
                placeholder="Rating 1-5"
                onChange={(e) => setRating(e.target.value)}
            />
            <button type="submit">Submit Rating</button>

            <div className="message">{messageRating ? <p>{messageRating}</p> : null}</div>
          </form>
        }

      </div>

  );
}


export default Login
