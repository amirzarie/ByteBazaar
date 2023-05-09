require("dotenv").config();
require("./config/database");

const Item = require("./models/item");

(async function () {
  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "gramophone",
      email: "az-gramophone@gmail.com",
      path: "/3ditems/gramophone.glb",
      price: 1001,
      position: [-5.7, 8, 1.8],
      scale: [4, 4, 4],
    },
    {
      name: "helmet",
      email: "az-helmet@gmail.com",
      path: "/3ditems/helmet.glb",
      price: 1010,
      position: [5.7, 8, 1.8],
      scale: [0.005, 0.005, 0.005],
    },
    {
      name: "microscope",
      email: "az-microscope@gmail.com",
      path: "/3ditems/microscope.glb",
      price: 111,
      position: [-3.5, 9, -4.8],
      scale: [1, 1, 1],
    },
    {
      name: "pocket_watch",
      email: "az-pocket_watch@gmail.com",
      path: "/3ditems/pocket_watch.glb",
      price: 1111,
      position: [3.5, 8, -4.8],
      scale: [0.2, 0.2, 0.2],
    },
    {
      name: "tv",
      email: "az-tv@gmail.com",
      path: "/3ditems/tv.glb",
      price: 11010,
      position: [0, 8.5, 6],
      scale: [0.005, 0.005, 0.005],
    },
  ]);

  console.log(items);

  process.exit();
})();
