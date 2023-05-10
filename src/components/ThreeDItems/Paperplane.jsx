import { useGLTF } from "@react-three/drei";

export default function PaperPlane(props) {
  const gltf = useGLTF("/3ditems/paperplane.glb");

  return (
    <mesh position={[5, 3, -2]} scale={[25, 35, 25]} rotation={[0, 0.9, 0.2]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
