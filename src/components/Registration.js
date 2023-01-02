import {useEffect, useState} from "react";

const Registration = ({api_link }) => {


  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    let body = JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
      });
    try {
      let res = await fetch("http://104.45.183.75/authentication/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: body,
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
        console.log(resJson)
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
      <div className="Register">
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
          />
          <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
          />
          <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
          />
          <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Create</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
  );
}


export default Registration
