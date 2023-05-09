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
          transform: "translate(30%, 36%) scale(1.4)",
        }}
      >
        <div className="form-container">
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label style={{ color: "#F4BB44", marginBottom: "10px" }}>
              Email
            </label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              style={{
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #F4BB44",
              }}
            />
            <label style={{ color: "#F4BB44", marginBottom: "10px" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              style={{
                padding: "8px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #F4BB44",
              }}
            />
            <hr style={{ margin: "10px 0" }} />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                background: "#F4BB44",
                color: "black",
                fontWeight: "bold",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              LOG IN
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </Html>
  );
}
