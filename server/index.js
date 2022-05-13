import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

<<<<<<< HEAD
import userRoutes from './routers/User.js';
import playerRoutes from './routers/Player.js'
dotenv.config();

const app = express();
=======
import postRoutes from './routers/posts.js';
import stadiumRoutes from './routers/Stadium.js';

dotenv.config();

const app = express();

app.use('/posts', postRoutes);
app.use('/stadium', stadiumRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

>>>>>>> 830b95d (create stadium api)
const CONNECTION_URL = "mongodb+srv://FootballCupManager:FootballCupManager@cluster0.7hvw3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
    .catch((error) => console.log(error.message));

    
app.use('/user', userRoutes);
app.use('/player', playerRoutes);