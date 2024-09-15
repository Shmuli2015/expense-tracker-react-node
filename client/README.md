# Expense Tracker App

## Overview

The **Expense Tracker App** is a simple web application for tracking your income and expenses. Built using **React**, **TypeScript**, and **Vite**, this app allows you to add transactions, view a list of them, and see a summary of your total balance, income, and expenses.

## Features

- Add income and expense transactions.
- View total balance.
- Separate views for total income and total expenses.
- List of all transactions with the ability to add new ones.

## Project Structure

Here is a breakdown of the main components in the app:

- `Header.tsx`: Displays the main heading of the app.
- `Balance.tsx`: Shows the current balance calculated from transactions.
- `IncomeExpenses.tsx`: Displays separate values for income and expenses.
- `TransactionList.tsx`: Lists all the transactions made.
- `AddTransaction.tsx`: Form to add new transactions with amount and description.
- `GlobalState.tsx`: Global state management using context API.

## Technologies Used

- **React** (with hooks)
- **TypeScript**
- **Vite** (bundler)
- **Styled Components** (for CSS-in-JS styling)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/expense-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd expense-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

Start the development server by running:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite server, and you can view the app by visiting `http://localhost:3000` in your browser.

### Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

The compiled and minified files will be generated in the `dist` folder, ready to be deployed.

### Linting and Formatting

This project uses ESLint for code linting and Prettier for formatting. You can check for linting errors and format your code using:

```bash
npm run lint
npm run format
```

## File Structure

Here's a simplified structure of the project:

```
src/
│
├── components/
│   ├── header/
│   │   └── Header.tsx
│   ├── balance/
│   │   ├── Balance.tsx
│   │   └── Balance.styled.ts
│   ├── incomeExpenses/
│   │   ├── IncomeExpenses.tsx
│   │   └── IncomeExpenses.styled.ts
│   ├── transactionList/
│   │   └── TransactionList.tsx
│   ├── addTransaction/
│       ├── AddTransaction.tsx
│       └── AddTransaction.styled.ts
│
├── context/
│   ├── GlobalState.tsx
│   └── AppReducer.ts
│
├── App.tsx
├── App.css
└── main.tsx
```

## Global State Management

Global state management in this project is handled using **React's Context API**. The `GlobalProvider` component wraps the main `App` component and provides global state across the app, such as the list of transactions and methods to add new transactions.

The context and reducer are located in:

- `GlobalState.tsx`: Provides the global context for transactions.
- `AppReducer.ts`: Handles the logic for updating the state based on actions like adding a transaction.

## Styled Components

We use **Styled Components** to handle the styling for the components. Each component has its corresponding styled file (e.g., `Balance.styled.ts`, `IncomeExpenses.styled.ts`) which contains the CSS-in-JS for that component.

## UUID Generation

For transaction IDs, we use the **uuid** library to generate unique IDs for each transaction.

## TypeScript

This project is written in **TypeScript** to take advantage of static typing, which improves code quality and maintainability. All components are strongly typed, including the props and state.

## Contribution

If you want to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License.

---

Enjoy tracking your expenses!
