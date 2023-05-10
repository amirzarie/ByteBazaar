import { useGLTF } from "@react-three/drei";

export default function Store(props) {
  const gltf = useGLTF("/3ditems/space_bazaar.glb");

  return (
    <mesh position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
