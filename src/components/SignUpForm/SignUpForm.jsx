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
            transform: "translate(-110%, 80%)",
          }}
        >
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label style={{ color: "#D27D2D" }}>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <label style={{ color: "#D27D2D" }}>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label style={{ color: "#D27D2D" }}>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label style={{ color: "#D27D2D" }}>Confirm</label>
              <input
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
              <hr />
              <button type="submit" disabled={disable}>
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
