// import NewOrderPage from "../NewOrderPage/NewOrderPage";
// import Messages from "../Messages/Messages";
// import { Routes, Route, Link } from "react-router-dom";
// import NavBar from "../../components/NavBar/NavBar";
// import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage";
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
          />
          {shelfItems.map((item) => (
            <Item key={item._id} item={item} user={user} />
          ))}
          <Store />
          <SignOutButton user={user} setUser={setUser} />
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

//   return (
//     <>
//       <directionalLight
//         color="#ffffff"
//         intensity={1}
//         position={[-1, 0.5, 0.5]}
//         castShadow
//       />
//       <ambientLight color="#ffffff" intensity={0.5} />
//       <OrbitControls
//         maxPolarAngle={Math.PI / 2}
//         mouseButtons={{ LEFT: 0, MIDDLE: 2, RIGHT: 2 }}
//         enablePan={true}
//       />
//       {shelfItems.map((item) => (
//         <Item key={item._id} item={item} user={user} />
//       ))}
//       <Store />
//     </>
//   );
// }

// function App() {
//   const [user, setUser] = useState(getUser());
//   return (
//     <main className="App">
//       {user ? (
//         <>
//           <NavBar user={user} setUser={setUser} />
//           <Routes>
//             <Route path="/orders" element={<NewOrderPage />} />
//             <Route path="/messages" element={<Messages />} />
//             <Route path="/items/:itemId" element={<ItemDetailsPage />}></Route>
//           </Routes>
//         </>
//       ) : (
//         <AuthPage setUser={setUser} />
//       )}
//     </main>
//   );
// }

export default App;
