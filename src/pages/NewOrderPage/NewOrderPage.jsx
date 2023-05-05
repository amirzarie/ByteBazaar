import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";

export default function NewOrderPage() {
  const [shelfItems, setShelfItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setShelfItems(items);
    }

    getItems();
  }, []);

  function test() {
    console.log("test")
  }

  return (
    <>
      <h1>NewOrderPage</h1>
      <button onClick={test}>Shelf</button>
    </>
  );
}
