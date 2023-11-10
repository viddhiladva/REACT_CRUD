import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
   
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handelUpadate =(e)=>{
    e.preventDefault();
    axios.put(`https://654b79ce5b38a59f28ef2458.mockapi.io/crud-task/${id}`,{
        name : name ,
        email: email,
      }).then(()=>{
        navigate("/show");
      })
  }


  return (
    <div>
      <form className="p-4 border rounded bg-light">
        <div className="mb-3">
          <h1 className="text-center">Student Form</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handelUpadate}>
          Update
        </button>
        <Link to="/show">
              <button className="btn btn-secondary mx-2">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default Update;
