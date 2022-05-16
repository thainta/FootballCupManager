import express from 'express';
import {getAllMatchs, createNewMatch, getMatchById, updateMatch,deleteMatch} from '../controllers/Match.js';

const router = express.Router();

router.get('/', getAllMatchs);
router.get('/matchId=:MatchId', getMatchById);
router.post('/create', createNewMatch);
router.put('/update/matchId=:MatchId', updateMatch);
router.delete('/delete/matchId=:MatchId', deleteMatch);

export default router;