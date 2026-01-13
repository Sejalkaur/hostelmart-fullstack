# HostelMart 🏠🛒

HostelMart is a full-stack e-commerce web application designed specifically for hostel students to purchase daily essentials, study items, snacks, and small appliances.

This project was developed as part of the KaDeep.ai Full-Stack Development Assignment, focusing on end-to-end system design, clean APIs, frontend–backend integration, and real-world data flow**.

---

## 🔗 Live Demo
Frontend: https://hostelmart-fullstack.vercel.app/
Backend: https://hostelmart-fullstack.onrender.com

---
## Project Objectives
The goal of this project is to demonstrate:

- Understanding of a real-world problem
- Clean REST API design
- Frontend–backend communication
- State management and UI flow
- Basic admin functionality
- Deployment of a complete full-stack system

This is not a production-ready platform. The focus is on clarity, correctness, and architecture.
---
## 🚀 Features

### User
Users do not need to log in.
***🏪 Browse Products***

- View all available hostel products
- Products are categorized into: Study, Daily Needs, Snacks, Appliances

***🛒 Cart Management***

- Add products to cart
- Increase quantity of items
- Cart icon shows live item count with a red badge
- Cart is accessible on a separate page

***📦 Place Order***
- Users can place an order directly from the cart
- Order data is sent to backend
- Orders are stored in the database
- After placing an order, cart is cleared

### Admin (Hidden)
- Secure admin login
- Add new products
- View all orders

This design ensures that normal users never see admin controls, while still allowing admin operations as required by the assignment.
***🔑 How to Access Admin Panel***
- Open the website
- Manually go to the following URL:https://your-frontend.vercel.app/admin
-Enter admin credentials: email(admin@hostelmart.com), password(admin123)

***🧑‍💼 Admin Capabilities***
- Add Products
- Admin can add new products with:
Name
Description
Price
Category
Image URL
Stock
Newly added products appear instantly on the user side

***📋 View Orders***

- Admin can view all orders placed by users
- Orders include:
Product details (snapshot)
Quantity
Total amount
Order time
---

## ⚙️ Local Development Setup

Follow the steps below to run the project locally on your machine.
You can verify Node and npm installation using:

```bash

node -v
npm -v
```

📁 Clone the Repository
```bash
git clone https://github.com/Sejalkaur/hostelmart-fullstack.git
cd hostelmart-fullstack
```

🛠️ Backend Setup
1️⃣ Navigate to Backend Folder
```bash
cd backend
```

2️⃣ Install Backend Dependencies
```bash
npm install
```

3️⃣ Configure Environment Variables

Create a .env file inside the backend folder:
```bash
touch .env
```


Add the following variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```


📌 Note:

Use MongoDB Atlas connection string for cloud setup

Or mongodb://127.0.0.1:27017/hostelmart for local MongoDB

4️⃣ Start the Backend Server
```bash
npm run dev
```


If successful, you should see:

```bash
MongoDB Connected
Server running on port 5000
```


Backend will be running at:

http://localhost:5000

🎨 Frontend Setup

Open a new terminal tab/window for frontend.

5️⃣ Navigate to Frontend Folder
```bash
cd frontend
```

6️⃣ Install Frontend Dependencies
```bash
npm install
```

7️⃣ Start the Frontend Application
```bash
npm start
```


Frontend will open automatically at:

http://localhost:3000

🔄 Running Both Servers Together

Backend runs on port 5000
Frontend runs on port 3000

Frontend communicates with backend using REST APIs
Make sure the following line exists in:
frontend/src/services/api.js

const BASE_URL = "http://localhost:5000/api";

---
## 🛠️ Tech Stack

**Frontend**
- React (Create React App)
- React Router
- javascript
- CSS (inline & component-based styling)

**Backend**
- Node.js
- Express.js
- REST APIs

**Database**
- MongoDB (Mongoose)

**Deployment**
- Vercel
- Render

---


## 🧠 Architecture Overview

- Frontend communicates with backend via REST APIs
- Backend handles product and order logic
- MongoDB stores products and order snapshots
- Admin access is protected using a hidden route and simple login

---

## 🧾 Important Design Decisions
***🔹 Why MongoDB?***
- Flexible schema
- JSON-based data flow
- Easy integration with Node.js and React
- Suitable for evolving product data

***🔹 Why Admin Is Hidden?***
- Matches real-world applications
- Prevents exposing admin actions to users
---





