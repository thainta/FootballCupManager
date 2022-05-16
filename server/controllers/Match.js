import matchDb from '../models/database/matchDb.js'

const getAllMatchs = async (req, res) => {
    matchDb.find().then((data)=>{
        res.send(data);
    });
}

const getMatchById = async (req, res) => {
    matchDb.findById(req.params.matchId).then((data) =>{
        res.send(data);
    })
}

const createNewMatch = async (req, res) => {
    const match = new matchDb({
        timeStart : req.body.timeStart,
        date : req.body.date,
        status : req.body.status,
        stadiumId :  req.body.stadiumId,
    })
    await match.save()
    .then((data)=>{
        res.send("Tạo thành công");
        res.send(data);
    }, err => {
        res.send(err.message); 
    })
    res.send({data: match})
}

const updateMatch = async (req, res) => {
    try{
        const data = await matchDb.findById(req.params.matchId)
        data.timeStart = req.body.timeStart
        data.date = req.body.date
        data.status = req.body.status
        data.stadiumId = req.body.stadiumId
        await data.save()
        res.send("Update successful")
    } catch{
        res.status(404).send({error: "match is not found"})
    }
    
}

const deleteMatch = async (req, res) => {
    try{
        const match = await matchDb.findById(req.params.matchId)
        await match.remove()
        res.send("delete sucessful!")
    }catch{
        res.status(404).send({error: "match is not found"})
    }
}

export {
    getAllMatchs,
    getMatchById,
    createNewMatch,
    updateMatch,
    deleteMatch
}   