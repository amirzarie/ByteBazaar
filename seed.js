require("dotenv").config();
require("./config/database");

const Item = require("./models/item");

(async function () {
  await Item.deleteMany({});
  const items = await Item.create([
    { name: "camera", path: "D:/General Assembly/my-dev-skills-lab/bytebazaar/src/components/3DItems/camera.glb", price: 101 },
    { name: "camera", path: "D:/General Assembly/my-dev-skills-lab/bytebazaar/src/components/3DItems/gramophone.glb", price: 1001 },
    { name: "camera", path: "D:/General Assembly/my-dev-skills-lab/bytebazaar/src/components/3DItems/helmet.glb", price: 1010 },
    { name: "camera", path: "D:/General Assembly/my-dev-skills-lab/bytebazaar/src/components/3DItems/microscope.glb", price: 111 },
    { name: "camera", path: "D:/General Assembly/my-dev-skills-lab/bytebazaar/src/components/3DItems/pocket_watch.glb", price: 1111 },
    { name: "camera", path: "D:/General Assembly/my-dev-skills-lab/bytebazaar/src/components/3DItems/tv.glb", price: 11010 },
  ]);

  console.log(items);

  process.exit();
})();
