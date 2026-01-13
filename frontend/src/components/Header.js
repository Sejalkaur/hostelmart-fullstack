const Header = ({
  categories,
  activeCategory,
  setCategory,
  cartCount,
  goToCart,
  goHome,
}) => {
  return (
    <div style={styles.header}>
      <h2 style={{ cursor: "pointer" }} onClick={goHome}>
        HostelMart
      </h2>

      <div style={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={{
              ...styles.categoryBtn,
              backgroundColor: activeCategory === cat ? "#000" : "#f1f1f1",
              color: activeCategory === cat ? "#fff" : "#000",
            }}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.cart} onClick={goToCart}>
        🧺
        {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    borderBottom: "1px solid #ddd",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 100,
  },
  categories: {
    display: "flex",
    gap: "10px",
  },

  categoryBtn: {
    padding: "8px 16px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    cursor: "pointer",
    background: "#fff",
    transition: "all 0.2s ease",
  },

  cart: {
    position: "relative",
    cursor: "pointer",
    fontSize: "22px",
  },
  badge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  //   cartCount: {
  //     fontSize: "14px",
  //     marginLeft: "4px",
  //   },
};

export default Header;
