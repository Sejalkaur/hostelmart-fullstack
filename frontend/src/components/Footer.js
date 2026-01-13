const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div>
          <h3>HostelMart</h3>
          <p>
            One-stop shop for hostel essentials — from study items to daily
            needs and snacks.
          </p>
        </div>

        <div>
          <h4>Categories</h4>
          <p>Study</p>
          <p>Daily Needs</p>
          <p>Snacks</p>
          <p>Appliances</p>
        </div>

        <div>
          <h4>About</h4>
          <p>Made for students</p>
          <p>Fast & affordable</p>
          <p>Campus-friendly</p>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} HostelMart. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "40px",
    background: "#111",
    color: "#fff",
    padding: "30px 20px",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  },
  bottom: {
    marginTop: "20px",
    borderTop: "1px solid #333",
    paddingTop: "10px",
    fontSize: "14px",
    textAlign: "center",
  },
};

export default Footer;
