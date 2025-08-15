# FINALPROJWEBDEV
Food Ordering App

PROJECT DESCRIPTION

The Food Ordering App is a full-stack web application designed to simplify online food ordering for restaurants and customers. It allows users to browse menus, add items to a cart, and place orders online, while restaurant owners can manage their menu and see orders.

The application aims to provide a smooth and interactive experience for both users and restaurant owners, making food delivery and management seamless and efficient.

For Customers:
Browse menu items by category.
View detailed information about each food item.
Add items to a cart and manage quantities.
Place orders securely.
Responsive UI for mobile and desktop devices.

Admin/Owner Features:
Add, edit, and remove menu items.
Upload images for food items.
View all customer orders with details.
Dashboard to manage orders and inventory.


Role-based authentication.
Protected routes and access control.
Easy-to-use dashboard for order and menu management.

Tech Stack
Frontend: React.js, React Router, Axios, CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT-based authentication
Payment Integration: Stripe 
File Uploads: Multer for handling images
Notifications: React Toastify for alerts and notifications

Project Highlights
Dynamic Menu Display: Food items are fetched from the backend and displayed in categories with images and prices.
Shopping Cart: Users can manage cart items, calculate totals, and place orders.
Order Management: Owners can view all orders.
Responsive Design: Works seamlessly on mobile, tablet, and desktop devices.
Secure Authentication: Users and owners have role-based access control using JWT tokens.


SETUP INSTRUCTIONS

BACKEND 

Clone the repository
git clone https://github.com/your-username/FINALPROJWEBDEV.git
cd FINALPROJWEBDEV/backend
Start backend server
npm run server
Backend runs on http://localhost:4000.

FRONTEND

Navigate to frontend folder:
cd ../frontend
Start frontend
npm run dev
Open browser and access:
Browse menu, add items to cart, place orders.
Sign up/login as a regular user.


ADMIN

Navigate to the owner frontend.
cd ../admin
Start frontend
npm run dev
Admin panel accessible via /owner route in the browser.
Manage menu 



USAGE
User
1. Open the app.
2. Browse the food menu.
3. Click counter for items you want to order.
4. Go to the Cart page to review your selected items.
5. Click Place Order and fill in delivery information:
6. Proceed to payment (integrated via Stripe).
7. View your orders in My Orders page after placing them.

---

Admin

1. Open the admin panel at `/owner` route in your frontend.
3. Dashboard allows you to:
* View all orders.
* Add new food items with images and descriptions.
* Edit or delete existing food items.
---

General Instructions

* Ensure the backend server is running.
* Make sure `.env` variables are correctly set for both backend and frontend.
* All images are stored in `/uploads` folder in the backend; ensure they are accessible for display.
* Refresh the page after updating order status to see changes reflected on the admin panel.

---
