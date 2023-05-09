import AuthPage from "../AuthPage/AuthPage";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";
import { OrbitControls } from "@react-three/drei";
import Store from "../../components/3DItems/Store";
import Item from "../../components/3DItems/3DItem";
import SignOutButton from "../../components/SignOutButton/SignOutButton";

function App() {
  const [user, setUser] = useState(getUser());

  const [shelfItems, setShelfItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setShelfItems(items);
    }

    getItems();
  }, []);

  return (
    <>
      {user ? (
        <>
          <SignOutButton user={user} setUser={setUser} />
          <directionalLight
            color="#ffffff"
            intensity={1}
            position={[-1, 0.5, 0.5]}
            castShadow
          />
          <ambientLight color="#ffffff" intensity={0.5} />
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            mouseButtons={{ LEFT: 0, MIDDLE: 2, RIGHT: 2 }}
            enablePan={true}
            minDistance={1}
            maxDistance={19}
          />
          {shelfItems.map((item) => (
            <Item key={item._id} item={item} user={user} />
          ))}
          <Store />
        </>
      ) : (
        <>
          <Store />
          <AuthPage setUser={setUser} />
        </>
      )}
    </>
  );
}

export default App;
