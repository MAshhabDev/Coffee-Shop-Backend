# ☕ Coffee Store Server

A professional, production-ready, and highly optimized full-stack backend application for a dynamic Coffee Shop Management Platform. Built with **TypeScript**, **Node.js**, **Express.js**, and powered by **PostgreSQL** using a pooled connection architecture.

The application includes secure JWT authentication, role-based authorization, type-safe request handling, relational database design, and centralized error management for scalable backend development.

---

## 🚀 Live Demo

**Production API:**  
https://coffee-store-jet.vercel.app/

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript (Strict Mode)

### Database
- PostgreSQL
- Neon Database

### Authentication & Security
- JSON Web Token (JWT)
- bcrypt (Salt Rounds: 10)

### Build & Deployment
- tsup
- Vercel

---

## ✨ Features

### 🔐 Authentication & Authorization
- User Registration
- User Login
- JWT-based Authentication
- Role-Based Access Control (RBAC)
- Admin & User Permissions

### ☕ Coffee Management
- Create Coffee Products
- View Coffee Catalog
- Delete Coffee Products
- Admin Protected Routes

### 🛒 Order Management
- Place Orders
- Multiple Order Items Support
- User Order History
- Admin Order Tracking

### ⚡ Advanced Backend Architecture
- Centralized Global Error Handler
- Async Error Management
- PostgreSQL Connection Pooling
- Type-Safe Request Handling
- Modular Feature-Based Structure
- Relational Database Design
- Cascade Delete Relationships

---

## 🏗️ Database Relationships

The system manages relationships among:

- Users
- Coffees
- Orders
- Order Items

Implemented using PostgreSQL foreign key constraints and:

```sql
ON DELETE CASCADE
```

to maintain data consistency.

---

## 📂 Project Structure

```text
coffee-store-server
│
├── dist/
│
├── src/
│   ├── config/
│   │   └── index.ts
│   │
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── globalErrorHandler.ts
│   │
│   ├── modules/
│   │   ├── auth/
│   │   ├── coffee/
│   │   └── orders/
│   │
│   ├── types/
│   │
│   ├── db.ts
│   └── server.ts
│
├── .env
├── .gitignore
├── tsconfig.json
├── tsup.config.ts
├── vercel.json
└── README.md
```

---

## 🔌 API Endpoints

### 🔐 Authentication

Base Route:

```http
/api/auth
```

#### Register User

```http
POST /signUp
```

Creates a new account.

#### Login User

```http
POST /signIn
```

Returns a JWT access token.

---

### ☕ Coffee Catalog

Base Route:

```http
/api/coffees
```

#### Get All Coffees

```http
GET /
```

Public Route

#### Create Coffee

```http
POST /
```

Admin Only

#### Delete Coffee

```http
DELETE /:id
```

Admin Only

---

### 🛒 Orders

Base Route:

```http
/api/orders
```

#### Place Order

```http
POST /
```

User Only

#### My Orders

```http
GET /my-orders
```

User Only

#### All Orders

```http
GET /
```

Admin Only

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000

CONNECTION_STRING=postgres://<user>:<password>@<host>/<database>?sslmode=require

ACCESS_SECRET=your_jwt_secret_key
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone <repository-url>
```

```bash
cd coffee-store-server
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## ☁️ Deployment

Deploy the application to Vercel:

```bash
npm run build
```

```bash
vercel --prod
```

---

## 🔒 Security Highlights

- Password Hashing with bcrypt
- JWT Access Tokens
- Protected Routes
- Role-Based Authorization
- Environment Variable Protection
- Centralized Error Handling

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed with ❤️ using TypeScript, Express.js, and PostgreSQL.
