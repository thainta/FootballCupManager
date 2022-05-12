import express from "express";
import { getAllUser, getUserById, createNewUser, updateUser, deleteUser } from "../controllers/User.js"

const router = express.Router();

router.get('/', getAllUser);
router.get('/userId=:userID', getUserById);
router.post('/', createNewUser);
router.put('/userId=:userID', updateUser);
router.delete('/userId=:userID', deleteUser);

export default router;