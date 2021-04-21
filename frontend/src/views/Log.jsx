import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

const Log = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (login === "" && password === "") {
      return console.log("something missing");
    } else {
      fetch(`http://localhost:8000/customers/add`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      history.push("/");
    }
  };

  console.log(login, password);

  return (
    <div className="row ">
      <Navbar />
      <h2 className="d-flex justify-content-center mt-2">Commercial</h2>
      <form onSubmit={handleSubmit}>
        <div className="col d-flex justify-content-center m-2">
          <input
            type="text"
            placeholder="Identifiant"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        {submitted && !login ? (
          <p className="d-flex justify-content-center m-2">
            Veuillez taper votre identifiant
          </p>
        ) : null}
        <div className="col d-flex justify-content-center m-2 ">
          <input
            type="Password"
            placeholder="mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {submitted && !password ? (
          <p className="d-flex justify-content-center m-2">
            Veuillez taper votre mot de passe
          </p>
        ) : null}
        <div className="col d-flex justify-content-center ">
          <input style={{ width: "182px", height: "30px" }} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Log;
