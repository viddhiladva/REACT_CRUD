import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://654b79ce5b38a59f28ef2458.mockapi.io/crud-task", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        navigate("/show");
      });
  };

  return (
    <div className="container">
      {/* <h2>Create</h2> */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form className="p-4 border rounded bg-light">
            <div className="mb-3">
              <h1 className="text-center">Student Form</h1>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* {name} */}
            {/* {email} */}

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <Link to="/show">
              <button className="btn btn-primary mx-2">Show Data</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
