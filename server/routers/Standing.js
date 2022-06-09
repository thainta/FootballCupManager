import express from 'express';
import {getStanding, getStandingOnSeason, createNewClubToStanding, updateStanding, updateStandingAfterMatch, deleteClubStanding,} from '../controllers/Standing.js';

const router = express.Router();

router.get('/', getStanding);
router.get('/season=:season', getStandingOnSeason);
router.post('/create/season=:season', createNewGoal);
router.put('/update/standingId=:standingId', updateStanding);
router.delete('/delete/season=:season?clubId=:clubId', deleteClubStanding);
export default router;