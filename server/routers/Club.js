import express from 'express';
import { getAllClub, getClubById, createNewClub, updateClub, deleteClub } from '../controllers/Club';

const router = express.Router();

router.get('/', getAllClub);
router.get('/clubId=:clubId', getClubById);
router.post('/', createNewClub);
router.put('/clubId=:clubId', updateClub);
router.delete('/clubId=:clubId', deleteClub);

export default router;