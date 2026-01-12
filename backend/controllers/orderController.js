const Order = require("../models/Order");

// POST /api/orders
const placeOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const order = new Order({
      items,
      totalAmount,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: "Failed to place order" });
  }
};

// GET /api/orders (Admin)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

module.exports = {
  placeOrder,
  getAllOrders,
};
