import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage";

export default function NewOrderPage() {
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
      <ul>
        {shelfItems.map((item) => (
          <li key={item._id}>
            <Link to={`/items/${item._id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
