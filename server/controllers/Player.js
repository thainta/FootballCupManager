import playerDb from '../models/database/playerDb.js';

const getAllPlayers = (req, res) => {
    playerDb.find().then((data)=>{
        res.send(data);
    }, (err) => {
        res.status(400).send(err.message);
    });
}

const getPlayerById = (req, res) => {
    let query = req.params;
    playerDb.findOne(query).then((data) => {
        res.send(data);
    }, (err) => {
        res.status(400).send(err.message);
    });
}

const getPlayerByClub = async (req, res) => {
    try {
        const data = await playerDb.find({clubId:req.params.clubId})
        res.send(data)
    } catch (err) {
        res.status(404).send(err)
    }
}

const createNewPlayer = (req, res) => {
    let player = new playerDb({
        playerName: req.body.playerName,
        playerRole: req.body.playerRole,
        dayOfBirth: req.body.dayOfBirth,
        nationality: req.body.nationality,
        avatar: req.body.avatar,
        clubId: req.body.clubId
    }); 

    player.save
    player.save().then((data)=>{
        res.send(data);
    }, err => {
        res.status(400).send(err.message);
    })
}

const updatePlayer = (req, res) => {
    const query = req.params;
    playerDb.findOneAndUpdate(query, {
        playerName: req.body.playerName,
        playerRole: req.body.playerRole,
        dayOfBirth: req.body.dayOfBirth,
        nationality: req.body.nationality,
        avatar: req.body.avatar,
        clubId: req.body.clubId
    }, (err, player) => {
        if (err) {
            res.send(err.message);
        }
        res.send(player)
    });
}

const deletePlayer = (req, res) => {
    const query = req.params;
    playerDb.findOneAndDelete(query, (err, player) => {
        if (err) {
            res.send(err.message);
        }
        res.send(player);
    });
    
}
export {
    getAllPlayers,
    getPlayerById,
    getPlayerByClub,
    createNewPlayer,
    updatePlayer,
    deletePlayer
}