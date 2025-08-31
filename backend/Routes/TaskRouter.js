const { createTask, fetchAllTasks, updateTaskById, deleteTaskById } = require('../Controllers/TaskController');

const express = require('express');
const router = express.Router();
// To get all the tasks
router.get('/', fetchAllTasks);

// To create a task
router.post('/', createTask);

// To update a task
router.put('/:id', updateTaskById);

// To delete a task
router.delete('/:id', deleteTaskById);

module.exports = router;