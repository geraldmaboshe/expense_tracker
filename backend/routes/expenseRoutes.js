const express = require('express');
const { createExpense, getExpenses, deleteExpense } = require('../controllers/expenseController');
const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateJWT, createExpense);
router.get('/', authenticateJWT, getExpenses);
router.delete('/:id', authenticateJWT, deleteExpense);

module.exports = router;