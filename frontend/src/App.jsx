import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import ExpenseChart from './components/ExpenseChart'; 
import ExpensesTable from './components/ExpensesTable'
import { Toaster } from './components/ui/toaster';
import './App.css';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <Toaster /> 
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/dashboard" element={<Dashboard setToken={setToken} />}>
                    <Route index element={<ExpenseChart />} /> 
                    <Route path="overview" element={<ExpenseChart />} />
                    <Route path="add-expense" element={<ExpenseForm />} /> 
                    <Route path="expenses" element={<ExpensesTable />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;