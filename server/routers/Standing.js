import express from 'express';
import {getStanding, getStandingOnSeason, createNewClubToStanding, updateStanding, updateStandingAfterMatch, deleteClubStanding, sortStanding, getAllSeason} from '../controllers/Standing.js';

const router = express.Router();

router.get('/', getStanding);
router.get('/season=:season', getStandingOnSeason);
router.get('/all-season',getAllSeason);
router.post('/create/season=:season', createNewClubToStanding);
router.put('/update/standingId=:standingId', updateStanding);
router.delete('/delete/standingId=:standingId', deleteClubStanding);
export default router;