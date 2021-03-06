import express from 'express';
import {getAllMatchs, createNewMatch, getMatchById, updateMatch,deleteMatch} from '../controllers/Match.js';

const router = express.Router();

router.get('/', getAllMatchs);
router.get('/matchId=:matchId', getMatchById);
router.post('/create/season=:season', createNewMatch);
router.put('/update/matchId=:matchId', updateMatch);
router.delete('/delete/matchId=:matchId', deleteMatch);

export default router;