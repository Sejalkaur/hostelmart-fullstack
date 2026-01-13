// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div style={{ border: "1px solid #ddd", padding: "12px", width: "200px" }}>
//       <img src={product.image} alt={product.name} width="100%" />
//       <h4>{product.name}</h4>
//       <p>₹{product.price}</p>

//       <button
//         style={{
//           background: "#000",
//           color: "#fff",
//           border: "none",
//           padding: "8px",
//           borderRadius: "6px",
//           cursor: "pointer",
//         }}
//         onClick={() => addToCart(product)}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <h4>{product.name}</h4>
      <p style={styles.price}>₹{product.price}</p>

      <button style={styles.button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    width: "220px",
    border: "1px solid #eee",
    borderRadius: "12px",
    padding: "14px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  price: {
    fontWeight: "bold",
    margin: "6px 0",
  },
  button: {
    width: "100%",
    padding: "8px",
    border: "none",
    background: "#000",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ProductCard;
