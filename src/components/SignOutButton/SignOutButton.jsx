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
      <div style={{ position: "absolute" }}>
        <button
          style={{
            padding: "10px 20px",
            background: "black",
            color: "#F4BB44",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
            position: "absolute",
            top: "-47vh",
            right: "-48vw",
            fontSize: "20px",
          }}
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </Html>
  );
}
