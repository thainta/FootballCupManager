import express from 'express';
import {getAllMatchs, createNewMatch, getMatchById, updateMatch,deleteMatch} from '../controllers/Match.js';

const router = express.Router();

router.get('/', getAllMatchs);
router.get('/matchId=:matchId', getMatchById);
router.post('/', createNewMatch);
router.put('/update/matchId=:matchId', updateMatch);
router.delete('/delete/matchId=:MatchId', deleteMatch);

export default router;