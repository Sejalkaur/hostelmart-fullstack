const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Everything Your Hostel Life Needs</h1>
        <p>
          From buckets to books, snacks to kettles — HostelMart has you covered.
        </p>
        <a href="/products">
          <button style={styles.cta}>Shop Now</button>
        </a>
      </section>

      {/* Why HostelMart */}
      <section style={styles.section}>
        <h2>Why HostelMart?</h2>
        <div style={styles.cards}>
          <div style={styles.card}>🎓 Student-focused products</div>
          <div style={styles.card}>⚡ Quick & affordable</div>
          <div style={styles.card}>🏠 Perfect for hostel life</div>
        </div>
      </section>

      {/* Categories Preview */}
      <section style={styles.section}>
        <h2>Popular Categories</h2>
        <div style={styles.cards}>
          <div style={styles.card}>📚 Study Essentials</div>
          <div style={styles.card}>🪣 Daily Needs</div>
          <div style={styles.card}>🍜 Snacks</div>
          <div style={styles.card}>🔌 Appliances</div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  hero: {
    textAlign: "center",
    padding: "60px 20px",
    background: "#f5f5f5",
    borderRadius: "12px",
  },
  cta: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "16px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  section: {
    marginTop: "50px",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  card: {
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid #eee",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
  },
};

export default Home;
