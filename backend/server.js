const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

sequelize.authenticate()
    .then(async () => {
        console.log('Database connected');
        await sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
    })
    .catch(err => console.error('Unable to connect to the database:', err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});