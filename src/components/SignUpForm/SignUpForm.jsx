import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { Html } from "@react-three/drei";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);

      this.props.setUser(user);
    } catch (err) {
      this.setState({ error: err.message });
      throw new Error(err);
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <Html>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-130%, 5%)",
          }}
        >
          <div className="form-container">
            <form
              autoComplete="off"
              onSubmit={this.handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="text"
                name="name"
                placeholder="First and last name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                style={{
                  padding: "8px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #F4BB44",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                style={{
                  padding: "8px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #F4BB44",
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                style={{
                  padding: "8px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  border: "1px solid #F4BB44",
                }}
              />

              <input
                type="password"
                name="confirm"
                placeholder="Confirm password"
                value={this.state.confirm}
                onChange={this.handleChange}
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
                disabled={disable}
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
                SIGN UP
              </button>
            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </Html>
    );
  }
}
