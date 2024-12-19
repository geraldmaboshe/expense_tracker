import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const ExpensesTable = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:4000/api/expenses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        toast({
          variant: "destructive",
          title: "Error fetching expenses",
          description: "Could not load expenses.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
          <th className="py-3 px-4 border-b text-left">Date</th>
            <th className="py-3 px-4 border-b text-left">Description</th>
            <th className="py-3 px-4 border-b text-left">Amount</th>
            <th className="py-3 px-4 border-b text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="py-2 px-4 border-b">{new Date(expense.createdAt).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{expense.description}</td>
              <td className="py-2 px-4 border-b">K{expense.amount.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{expense.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <strong>Total Amount: </strong>${totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default ExpensesTable;