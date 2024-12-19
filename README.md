# Expense Tracker

## Overview

Expense Tracker is a web application designed to help users manage their personal finances by tracking their expenses. Built with React and Vite for the frontend and Node.js with Express for the backend, this application provides a user-friendly interface for registering, logging in, and managing expenses.

## Features

- User registration and authentication
- Add, view, and delete expenses
- Visual representation of expenses through charts
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - Chart.js
  - Axios

- **Backend:**
  - Node.js
  - Express
  - Sequelize (for database interaction)
  - MySQL (or any other SQL database)
  - JWT for authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL (or any other SQL database)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. Navigate to the frontend directory and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and install dependencies:

   ```bash
   cd ../backend
   npm install
   ```

4. Set up your database:
   - Create a new database in MySQL.
   - Update the `.env` file in the backend directory with your database credentials.

5. Run the backend server:

   ```bash
   npm start
   ```

6. In a new terminal, navigate to the frontend directory and run the development server:

   ```bash
   cd frontend
   npm run dev
   ```

7. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- **Register**: Create a new account to start tracking your expenses.
- **Login**: Access your account with your credentials.
- **Dashboard**: View your expenses in a table and as a chart.
- **Add Expense**: Input details of your expenses to keep track of your spending.
- **Delete Expense**: Remove any expense entry you no longer need.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and libraries that made this project possible.