import * as userService from "../../utilities/users-service";
import { Html } from "@react-three/drei";

export default function SignOutButton({ user, setUser }) {
  function handleSignOut() {
    window.location.reload();
    userService.logOut();
    setUser(null);
  }

  return (
    <Html>
      <button
        style={{
          padding: "10px 20px",
          background: "black",
          color: "#F4BB44",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          top: "-45vh",
          right: "-45vw",
          fontSize: "18px",
        }}
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </Html>
  );
}
