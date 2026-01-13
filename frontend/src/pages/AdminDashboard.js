import AdminAddProduct from "./AdminAddProduct";
import AdminOrders from "./AdminOrders";

const AdminDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <AdminAddProduct />
      <AdminOrders />
    </div>
  );
};

export default AdminDashboard;
