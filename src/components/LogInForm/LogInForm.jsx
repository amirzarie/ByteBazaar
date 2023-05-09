import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { Html } from "@react-three/drei";

export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <Html>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(10%, 140%)",
        }}
      >
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label style={{ color: "#D27D2D" }}>Email</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <label style={{ color: "#D27D2D" }}>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <hr />
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </Html>
  );
}
