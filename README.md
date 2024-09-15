# Expense Tracker (MERN Stack)

## Overview

The **Expense Tracker** is a full-stack web application for tracking your income and expenses. Built using the MERN stack (MongoDB, Express, React, Node.js), this app allows you to add transactions, view a list of them, and see a summary of your total balance, income, and expenses. All data is persisted in a MongoDB database.

## Features

- Add income and expense transactions
- View total balance
- Separate views for total income and total expenses
- List of all transactions with the ability to add new ones
- Backend API to handle CRUD operations on transactions
- MongoDB integration for data persistence

## Technologies Used

- **Frontend:**
  - React (with hooks)
  - TypeScript
  - Vite (bundler)
  - Styled Components (for CSS-in-JS styling)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose (ODM)

## Project Structure

```
expense-tracker/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies for both client and server:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `server` directory with the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

### Running the Project

To run both frontend and backend concurrently:

```bash
npm run dev
```

To run backend only:
```bash
cd server
npm run server
```

To run frontend only:
```bash
cd client
npm run client
```

The app will be available at `http://localhost:3000`, and the API at `http://localhost:5000`.

## Building for Production

1. Build the client:
   ```bash
   cd client
   npm run build
   ```

2. Build the server:
   ```bash
   cd server
   npm run build
   ```

3. Start the production server:
   ```bash
   cd server
   npm start
   ```

## API Endpoints

- `GET /api/transactions`: Fetch all transactions
- `POST /api/transactions`: Add a new transaction
- `DELETE /api/transactions/:id`: Delete a transaction

## Global State Management

The frontend uses React's Context API for global state management. The `GlobalProvider` component wraps the main `App` component and provides global state across the app.

## Database Schema

The MongoDB schema for transactions includes:
- `text`: String (required)
- `amount`: Number (required)
- `createdAt`: Date (default: Date.now)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

Happy expense tracking!
