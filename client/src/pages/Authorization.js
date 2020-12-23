import React, { useState } from "react";

const Authorization = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="authWr">
      <div className="row">
        <div className="col s6 offset-s3 z-depth-4 form">
          <h2 className="title-link">Shorten Link</h2>
          <div className="card white darken-3 form-wrapper">
            <div className="card-content black-text">
              <span className="card-title teal-text darken-4 auth">
                Authorization
              </span>
            </div>
            <div className="input-field ">
              <input
                id="email"
                type="email"
                className="form-input black-text"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                id="password"
                type="password"
                className="form-input black-text"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="card-action">
              <button className="btn teal accent-3 black-text">Login</button>
              <button className="btn grey lighten-2 black-text">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
