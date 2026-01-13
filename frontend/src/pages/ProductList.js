import { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const ProductList = ({ addToCart, category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
