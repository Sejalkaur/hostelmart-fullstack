// import { useState } from "react";
// import ProductList from "./pages/ProductList";
// import Cart from "./pages/Cart";
// import AdminAddProduct from "./pages/AdminAddProduct";
// import AdminOrders from "./pages/AdminOrders";

// function App() {
//   const [cart, setCart] = useState([]);
//   const [view, setView] = useState("user");

//   const addToCart = (product) => {
//     const existing = cart.find((item) => item._id === product._id);

//     if (existing) {
//       setCart(
//         cart.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => setView("user")}>User View</button>
//       <button onClick={() => setView("add")}>Admin Add Product</button>
//       <button onClick={() => setView("orders")}>Admin Orders</button>

//       {view === "user" && (
//         <>
//           <ProductList addToCart={addToCart} />
//           <Cart cart={cart} setCart={setCart} />
//         </>
//       )}

//       {view === "add" && <AdminAddProduct />}
//       {view === "orders" && <AdminOrders />}
//     </div>
//   );
// }

// export default App;
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Study", "Daily", "Snacks", "Appliances"];

  const addToCart = (product) => {
    const existing = cart.find((item) => item._id === product._id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Header
        categories={categories}
        activeCategory={category}
        setCategory={(cat) => {
          setCategory(cat);
          navigate("/products");
        }}
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        goToCart={() => navigate("/cart")}
        goHome={() => navigate("/")}
      />

      <Routes>
        {/* User routes */}
        {/* <Route
          path="/"
          element={<ProductList addToCart={addToCart} category={category} />}
        /> */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        {/* Hidden admin routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<ProductList addToCart={addToCart} category={category} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default AppWrapper;
// export default App;
