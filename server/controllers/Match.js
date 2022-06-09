import matchDb from '../models/database/matchDb.js'

const getAllMatchs = async (req, res) => {
    try {
        matchDb.find().then((data)=>{
            res.send(data);
        });
    } catch {
        res.status(404).send({error: "Could'n find match"})
    }
 
}

const getMatchById = async (req, res) => {
    try{
        matchDb.findById(req.params.matchId).then((data) =>{
        res.send(data);
    })
    } catch{
        res.status(404).send({error: "Could'n find match"})
    }
}

const createNewMatch = async (req, res) => {
    try{
        const match = new matchDb({
            timeStart : req.body.timeStart,
            date : req.body.date,
            status : req.body.status,
            stadiumId :  req.body.stadiumId,
        })
        await match.save()
        res.send("create successful!")
    } catch{
        res.status(404).send({error: "can't create match"})
    }
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