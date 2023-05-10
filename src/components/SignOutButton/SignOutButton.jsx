import * as userService from "../../utilities/users-service";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import robotoBold from "../ThreeDItems/Roboto_Bold.json";
import { extend } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";

extend({ TextGeometry });

export default function SignOutButton({ user, setUser }) {
  function handleSignOut() {
    window.location.reload();
    userService.logOut();
    setUser(null);
  }

  const font = new FontLoader().parse(robotoBold);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = isHovered ? "pointer" : "auto";
  });

  return (
    <>
      <mesh
        position={[1, -0.65, -5.7]}
        onClick={handleSignOut}
        rotation={[0, Math.PI, 0]}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <textGeometry args={[`Sign Out`, { font, size: 0.3, height: 0.03 }]} />
        <meshPhysicalMaterial attach="material" color={"#F4BB44"} />
      </mesh>
    </>
  );
}
