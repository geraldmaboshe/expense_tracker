import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">ExpenseTracker</h1>
        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h2 className="mt-6 text-4xl font-extrabold">
            Welcome to ExpenseTracker
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Your personal finance management tool
          </p>
          <div className="mt-6">
            <Link to="/register">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 ExpenseTracker. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

