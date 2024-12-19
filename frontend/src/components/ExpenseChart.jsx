import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
    console.log("expenses", expenses);
    

    if (
        !expenses ||
        !Array.isArray(expenses) ||
        expenses.length === 0 ||
        !expenses.every(exp => exp.category && typeof exp.amount === 'number')
    ) {
        return <div className="text-center text-gray-600"></div>;
    }

    const categoryData = expenses.reduce((acc, exp) => {
        acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categoryData),
        datasets: [
            {
                label: 'Expenses',
                data: Object.values(categoryData),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded shadow"  style={{ height: '500px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ExpenseChart;
