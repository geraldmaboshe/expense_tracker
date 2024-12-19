import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, NotebookPen, Home, User } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';
import ExpenseChart from './ExpenseChart'; 

const Dashboard = ({ setToken }) => {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    setToken(''); 
    toast({
      variant: "success",
      title: "Logged out",
      description: "You have successfully logged out.",
    });
    navigate('/login');
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem('token');
      
        const response = await axios.get('http://localhost:4000/api/expenses', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log("response", response);
        
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        toast({
          variant: "destructive",
          title: "Error fetching expenses",
          description: "Could not load expenses.",
        });
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">ExpenseTracker</h1>
        </div>
        <nav className="mt-4">
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Home className="mr-3 h-5 w-5" />
            Overview
          </Link>
          <Link to="/dashboard/add-expense" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <NotebookPen className="mr-3 h-5 w-5" />
            Add Expense
          </Link>
          <Link to="/dashboard/expenses" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <ClipboardList className="mr-3 h-5 w-5" />
            Expenses
          </Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <User className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
        <Card>
          <CardContent>
            <Outlet />
            {window.location.pathname === '/dashboard' && <ExpenseChart expenses={expenses} />}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;