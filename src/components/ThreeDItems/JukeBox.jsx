import { useGLTF } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";

export default function JukeBox(props) {
  const gltf = useGLTF("/3ditems/vintage_jukebox.glb");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.cursor = isHovered ? "pointer" : "auto";
  });

  const audioFile = "/3ditems/night_in_kyoto.mp3";

  useEffect(() => {
    audioRef.current = new Audio(audioFile);
  }, []);

  function handleMusic() {
    const audio = audioRef.current;

    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsMusicPlaying(!isMusicPlaying);
  }

  return (
    <mesh
      position={[14, -1.4, -2]}
      scale={[2, 2, 2]}
      rotation={[0, 2.2, 0]}
      onClick={handleMusic}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
}
