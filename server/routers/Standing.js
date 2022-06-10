import express from 'express';
import {getStanding, getStandingOnSeason, createNewClubToStanding, updateStanding, updateStandingAfterMatch, deleteClubStanding,} from '../controllers/Standing.js';

const router = express.Router();

router.get('/', getStanding);
router.get('/season=:season', getStandingOnSeason);
router.post('/create/season=:season', createNewClubToStanding);
router.put('/update/standingId=:standingId', updateStanding);
router.delete('/delete/standingId=:standingId', deleteClubStanding);
export default router;