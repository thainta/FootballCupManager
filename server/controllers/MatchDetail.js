import matchDetailDb from '../models/database/matchDetailDb.js'
import clubDb from '../models/database/clubDb.js'
import {updateStandingAfterMatch} from "./Standing.js"
import matchDb from '../models/database/matchDb.js'
const getAllMatchDetails = async (req, res) => {
    try {
        matchDetailDb.find().then((data)=>{
            res.send(data);
        });
    } catch {
        res.status(404).send({error: "Could'n find MatchDetail"})
    }
 
}

const getMatchDetailById = async (req, res) => {
    try{
        matchDetailDb.findById(req.params.matchDetailId).then((data) =>{
        res.send(data);
    })
    } catch{
        res.status(404).send({error: "Could'n find MatchDetail"})
    }
}

const createNewMatchDetail = async (match) => {
    try{
        // 0 di 1 ve
        const club = await clubDb.find({stadiumId: match.stadiumId})    
        if (club[0]._id.valueOf() == match.club1Id.valueOf()){
            const matchDetail = new matchDetailDb({
                club1Goal: 0,
                club2Goal: 0,
                typeMatch: 0,
                matchId: match._id.valueOf()
            })
            await matchDetail.save()
        } else {
            const matchDetail = new matchDetailDb({
                club1Goal: 0,
                club2Goal: 0,
                typeMatch: 1,
                matchId: match._id.valueOf()
            })
            await matchDetail.save()
        }
       
    } catch{
        res.status(404).send({error: "can't create MatchDetail"})
    }
}

const updateMatchDetail = async (req, res) => {
    try{
        const data = await matchDetailDb.findById(req.params.matchDetailId)
        const match = await matchDb.find({_id: data.matchId.valueOf()})
        data.club1Goal = req.body.club1Goal
        data.club2Goal = req.body.club2Goal
        data.typeMatch = req.body.typeMatch
        data.matchId = req.body.matchId
        let infor = {
            club1Id : match[0].club1Id.valueOf(),
            club2Id : match[0].club2Id.valueOf(),
            club1Goal : req.body.club1Goal,
            club2Goal : req.body.club2Goal,
            season: match[0].season
        }
        updateStandingAfterMatch(infor)
        await data.save()
        res.send("Update successful")
    } catch{
        res.status(404).send({error: "MatchDetail is not found"})
    }
    
}

const deleteMatchDetail = async (req, res) => {
    try{
        const matchDetail = await matchDetailDb.findById(req.params.matchDetailId)
        await matchDetail.remove()
        res.send("delete sucessful!")
    }catch{
        res.status(404).send({error: "MatchDetail is not found"})
    }
}

export {
    getAllMatchDetails,
    getMatchDetailById,
    createNewMatchDetail,
    updateMatchDetail,
    deleteMatchDetail
}   