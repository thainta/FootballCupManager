import express from 'express';
import {getAllPlayers, getPlayerById, createNewPlayer, updatePlayer, deletePlayer, getPlayerByClub} from '../controllers/Player.js';

const router = express.Router();

router.get('/', getAllPlayers);
router.get('/playerId=:playerId', getPlayerById);
router.get('/clubId=:clubId', getPlayerByClub)
router.post('/', createNewPlayer);
router.put('/playerId=:playerId', updatePlayer);
router.delete('/playerId=:playerId', deletePlayer);

export default router;