import { placeOrder } from "../services/api";

const Cart = ({ cart, setCart }) => {
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const styles = {
    item: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #eee",
    },
  };
  const checkoutHandler = async () => {
    const orderData = {
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount,
    };

    await placeOrder(orderData);
    alert("Order placed successfully 🎉");
    setCart([]);
  };

  return (
    <div style={{ padding: "20px", borderTop: "2px solid #eee" }}>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item._id} style={styles.item}>
          <span>{item.name}</span>
          <span>× {item.quantity}</span>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{totalAmount}</h3>
          <button onClick={checkoutHandler}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;
