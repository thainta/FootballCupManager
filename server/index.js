import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routers/User.js';
import stadiumRoutes from './routers/Stadium.js';
import playerRoutes from './routers/player.js';
import clubRoutes from './routers/club.js';

dotenv.config();

const app = express();

const CONNECTION_URL = "mongodb+srv://FootballCupManager:FootballCupManager@cluster0.7hvw3.mongodb.net/footballmanager?retryWrites=true&w=majority";
const PORT = 5000;

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));

    
app.use('/user', userRoutes);
app.use('/player', playerRoutes);
app.use('/stadium', stadiumRoutes);
app.use('/club', clubRoutes);