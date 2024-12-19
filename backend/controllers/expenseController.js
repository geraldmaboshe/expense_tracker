const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
    const { description, amount, category } = req.body;
    const userId = req.user.id

    try {
        const expense = await Expense.create({ description, amount, category, userId });
        res.status(201).json(expense);
    } catch (error){
        console.log("Error creating expense", error)
        res.status(500).json({error: 'Failed to create expense'})
    }

};

exports.getExpenses = async (req, res) => {
    const userId = req.user.id
    try {
        const expenses = await Expense.findAll({ where: { userId}});
        res.json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }

};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    await Expense.destroy({ where: { id } });
    res.sendStatus(204);
};