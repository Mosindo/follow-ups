import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import {Link} from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/customers/")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="m-4 d-flex justify-content-center">suivi des prospects</h2>
      <div className="d-flex justify-content-center">
      <Link className="m-3 btn btn-primary d-flex justify-content-center" to="/add">Ajout d'un prospect</Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Relation commerciale</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customers, idx) => {
            return (
              <tr>
                <th scope="row" key={idx}>
                  {idx + 1}
                </th>
                <td>{customers.firstName}</td>
                <td>{customers.name}</td>
                <td>{customers.stage}</td>
                <td>
                    <ul className="choice">
                        <li>
                        <Link to={`/update/${customers._id}`}  className="btn btn-success">modifier</Link>
                        <Link to={`/delete/${customers._id}`} className="btn btn-danger">Supprimer</Link>
                        </li>
                    </ul>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
