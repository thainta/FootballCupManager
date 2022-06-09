import express from 'express';
import {getAllGoals, createNewGoal, getGoalById, updateGoal,deleteGoal} from '../controllers/Goal.js';

const router = express.Router();

router.get('/', getAllGoals);
router.get('/goalId=:goalId', getGoalById);
router.post('/create', createNewGoal);
router.put('/update/goalId=:goalId', updateGoal);
router.delete('/delete/goalId=:goalId', deleteGoal);

export default router;