import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useHistory  } from "react-router-dom";

const Add = () => {
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [stage, setStage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const history = useHistory();
  const {login}= useParams();

  function handleChange(e) {
    setStage(e.target.value);
    console.log(stage);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (firstName === "" || name === "" || stage === "") {
      return console.log("something missing");
    } else {
      fetch(`http://localhost:8000/customers/add`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          name: name,
          stage: stage,
        }),
      })
        .then((res) => res.json())
        .then((data) => {console.log(data);
      history.push(`/home/${login}`);
    })
    }
  };

  console.log(stage, name, firstName);
  return (
    <div className="row ">
      <Navbar />
      <h2 className="d-flex justify-content-center m-2">
        Ajout d'un nouveau prospect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="col d-flex justify-content-center m-2">
          <input
            type="text"
            placeholder="Nom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {submitted && !firstName ? (
          <p className="d-flex justify-content-center m-2">
            Veuillez taper votre nom
          </p>
        ) : null}
        <div className="col d-flex justify-content-center m-2 ">
          <input
            type="text"
            placeholder="Prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {submitted && !name ? (
          <p className="d-flex justify-content-center m-2">
            Veuillez taper votre prénom
          </p>
        ) : null}
        <div className="col d-flex justify-content-center m-2 ">
          <select
            style={{ width: "182px", height: "30px" }}
            onChange={handleChange}
            value={stage}
          >
            <option value="Prospect">Prospect</option>
            <option value="1er contact">1er contact</option>
            <option value=" 1ere relance"> 1ere relance</option>
            <option value=" 2éme relance"> 2éme relance</option>
            <option value="Signature">Signature</option>
          </select>
        </div>
        {submitted && !stage ? (
          <p className="d-flex justify-content-center">
            Veuillez choisir une catégorie
          </p>
        ) : null}
        <div className="col d-flex justify-content-center ">
          <input style={{ width: "182px", height: "30px" }} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Add;
