import playerDb from '../models/database/playerDb.js';

const getAllPlayers = (req, res) => {
    playerDb.find().then((data)=>{
        res.send(data);
    });
}

const getPlayerById = (req, res) => {
    res.send(req.params);
}

const createNewPlayer = (req, res) => {
    let player = new playerDb({
        playerName: req.body.playerName,
        playerRole: req.body.playerRole,
        dayOfBirth: req.body.dayOfBirth,
        nationality: req.body.nationality,
        avatar: req.body.avater,
        clubId: req.body.clubId
    }); 
    
    player.save
    player.save().then((data)=>{
        res.send("Tạo thành công");
        res.send(data);
    }, err => {
        res.send(err.message); 
    })
}

const updatePlayer = (req, res) => {
    const query = req.params;
    playerDb.findOneAndUpdate(query, {
        playerName: req.body.playerName,
        playerRole: req.body.playerRole,
        dayOfBirth: req.body.dayOfBirth,
        nationality: req.body.nationality,
        avatar: req.body.avater,
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
    createNewPlayer,
    updatePlayer,
    deletePlayer
}