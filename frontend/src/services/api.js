const BASE_URL = "https://hostelmart-fullstack.onrender.com/api";

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
};
export const placeOrder = async (orderData) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  return response.json();
};

export const addProduct = async (productData) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  return response.json();
};

export const getAllOrders = async () => {
  const response = await fetch(`${BASE_URL}/orders`);
  return response.json();
};
