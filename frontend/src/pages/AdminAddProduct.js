import { useState } from "react";
import { addProduct } from "../services/api";

const AdminAddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await addProduct({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });
    alert("Product added successfully ✅");
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
      stock: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin – Add Product</h2>

      <form onSubmit={submitHandler}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={changeHandler}
        />
        <br />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={changeHandler}
        />
        <br />
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={changeHandler}
        />
        <br />
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={changeHandler}
        />
        <br />
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={changeHandler}
        />
        <br />
        <input
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={changeHandler}
        />
        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
