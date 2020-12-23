import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/useHttp";
import { useMessage } from "../hooks/useMessage";
import AuthContext from "../store/AuthContext";
import "./Authorization.css";

const Authorization = () => {
  const { login } = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (err) {}
  };
  const handleLogin = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      login(data.token, data.userId);
    } catch (err) {}
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
                name="email"
                id="email"
                type="email"
                className="form-input black-text"
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                name="password"
                id="password"
                type="password"
                className="form-input black-text"
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="card-action">
              <button
                className="btn teal accent-3 black-text"
                disabled={loading}
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="btn grey lighten-2 black-text"
                disabled={loading}
                onClick={handleRegistration}
              >
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
