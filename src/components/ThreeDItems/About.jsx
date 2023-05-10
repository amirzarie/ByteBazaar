import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import robotoBold from "./Roboto_Bold.json";
import { extend } from "@react-three/fiber";

extend({ TextGeometry });

export default function About() {
  const font = new FontLoader().parse(robotoBold);

  return (
    <>
      <mesh position={[-0.5, -0.3, 5.7]}>
        <textGeometry
          args={[`Home to the retro`, { font, size: 0.1, height: 0.01 }]}
        />
        <meshPhysicalMaterial attach="material" color={"#F4BB44"} />
      </mesh>
      <mesh position={[-2, -0.6, 5.7]}>
        <textGeometry
          args={[
            `Reach out to zarieamir@gmail.com to sell your vintage items here!`,
            { font, size: 0.1, height: 0.01 },
          ]}
        />
        <meshPhysicalMaterial attach="material" color={"#F4BB44"} />
      </mesh>
    </>
  );
}
