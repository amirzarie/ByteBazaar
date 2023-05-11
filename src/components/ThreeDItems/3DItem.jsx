import { useGLTF, Html } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { useFrame, extend } from "@react-three/fiber";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import robotoBold from "./Roboto_Bold.json";
import * as itemsAPI from "../../utilities/items-api";

extend({ TextGeometry });

export default function VintageCamera({ item, user }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const objectRef = useRef();

  const font = new FontLoader().parse(robotoBold);

  const gltf = useGLTF(item.path);

  useEffect(() => {
    document.body.style.cursor = isHovered ? "pointer" : "auto";
  });

  useFrame(() => {
    if (isHovered) {
      objectRef.current.rotation.y += 0.02;
    }
  });

  function handleClick(event) {
    if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }

  async function handlePurchase(event) {
    const itemStatus = await itemsAPI.getById(item._id);
  }

  return (
    <>
      <mesh position={item.position} scale={item.scale}>
        <primitive
          ref={objectRef}
          object={gltf.scene}
          onPointerOver={() => setIsHovered(true)}
          onPointerOut={() => setIsHovered(false)}
          onClick={handleClick}
        />
      </mesh>

      <mesh position={[-2.8, 0.2, 2]}>
        <textGeometry
          args={[
            `Welcome to Byte Bazaar ${user.name}`,
            { font, size: 0.3, height: 0.03 },
          ]}
        />
        <meshPhysicalMaterial attach="material" color={"#F4BB44"} />
      </mesh>

      {showInfo ? (
        <Html>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "20px",
              border: "1px solid black",
              width: "50vw",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Item: {item.name}</h3>
            <h3 style={{ marginBottom: "10px" }}>Sold by: {item.email}</h3>
            <h3 style={{ marginBottom: "10px" }}>Price: ${item.price} CAD</h3>
            <h3 style={{ marginBottom: "20px" }}>
              Description/Specs: {item.description}
            </h3>
            <p>Contact the seller to coordinate the purchase</p>
            <button
              style={{
                position: "absolute",
                padding: "10px 20px",
                background: "black",
                top: "1vh",
                right: "0.5vw",
                color: "#F4BB44",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                fontSize: "20px",
              }}
              onClick={handleClick}
            >
              Close
            </button>

            <button
              style={{
                position: "absolute",
                padding: "10px 20px",
                background: "black",
                bottom: "1vh",
                right: "0.5vw",
                color: "#F4BB44",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                fontSize: "20px",
              }}
              onClick={handlePurchase}
            >
              Purchase
            </button>
          </div>
        </Html>
      ) : null}
    </>
  );
}
