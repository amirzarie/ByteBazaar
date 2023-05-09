const Item = require("../../models/item");

async function index(req, res) {
  const items = await Item.find({});
  res.json(items);
}

async function deleteItem(req, res) {
  const deletedItem = await Item.findByIdAndDelete(req.params.id);
  res.json({
    success: true,
    message: "Item purchase successfully",
    item: deleteItem,
  });
}

module.exports = {
  index,
  deleteItem,
};
