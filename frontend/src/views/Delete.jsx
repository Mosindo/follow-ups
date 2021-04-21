import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams, useHistory } from "react-router-dom";

const Delete = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8000/customers/")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  console.log(data);

  const { id } = useParams("");
  console.log(id);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/customers/delete/${id}`, {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    history.push("/");
  };

  const result = data.filter((data) => data._id === id);

  console.log(result);

  return (
    <div>
      <Navbar />
      <h2>Update Page</h2>
      <form onSubmit={handleSubmit}>
        {result.map((customer) => {
          return (
            <>
              <p>
                Êtes-vous sûr de vouloir supprimer ce prospect:{" "}
                {customer.firstName} {customer.name}
              </p>
              <p></p>
            </>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Delete;
