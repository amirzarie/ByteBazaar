import { useGLTF } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";

export default function PaperPlane(props) {
  const gltf = useGLTF("/3ditems/old_vintage_globe.glb");
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.cursor = isHovered ? "pointer" : "auto";
  });

  const scale = isHovered ? [0.2, 0.2, 0.2] : [0.05, 0.05, 0.05];

  return (
    <mesh
      position={[-12, -1, 2]}
      rotation={[0, 0, 0]}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      scale={scale}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
}
