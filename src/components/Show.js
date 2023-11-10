import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Show() {
  const [data, showData] = useState([]);

  function getData() {
    axios
      .get("https://654b79ce5b38a59f28ef2458.mockapi.io/crud-task")
      .then((resp) => {
        // console.log(resp.data);
        showData(resp.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://654b79ce5b38a59f28ef2458.mockapi.io/crud-task/${id}`)
      .then(() => getData());
  }
  // getData();

  const toLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  // console.log(toLocalStorage());

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h2 className="text-center mt-3">Student Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          toLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <div className="d-flex justify-content-between m-4">
        <Link to="/">
          <button className="btn btn-secondary">back</button>
        </Link>
        <Link to="/">
          <button className="btn btn-primary">Create Data</button>
        </Link>
      </div>
    </>
  );
}

export default Show;
