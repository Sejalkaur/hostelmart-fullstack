import { useEffect, useState } from "react";
import { getAllOrders } from "../services/api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getAllOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin – Orders</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ddd",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>
          <p>
            <strong>Total:</strong> ₹{order.totalAmount}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
