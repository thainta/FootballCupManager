import standingDb from '../models/database/standingDb.js'
import clubDb from '../models/database/clubDb.js'
import parameterDb from '../models/database/parameterDb.js'

const getStanding = async (req, res) =>{
    try {
        const data = await standingDb.find({})
        res.send(data)
    } catch {
        res.status(404).send({error: "Can't find standing!"})
    }
}

const getStandingOnSeason = async (req, res) =>{
    try {
        const data = await standingDb.find({'season': req.params.season})
        res.send(data);

    } catch {
        res.status(404).send({error: "Can't find standing!"})
    }
}

const createNewClubToStanding = async (req, res) => {
    try {
        const newClubStanding = new standingDb({
            rank: 0,
            point: 0,
            played: 0,
            win: 0,
            drawn: 0,
            lose: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,
            seasonId: req.params.season,
            clubId: req.body.clubId
        })
        await newClubStanding.save()
        res.send("Add successful")
    } catch {
        res.status(404).send({error: "Can't create standing!"})
    }
}

const updateStanding = async (req, res) => {
    try{
        const standingCLub = await standingDb.findById(req.params.standingId)
        standingCLub.rank = req.body.rank,
        standingCLub.point = req.body.point,
        standingCLub.played = req.body.played,
        standingCLub.win = req.body.win,
        standingCLub.drawn = req.body.drawn,
        standingCLub.lose = req.body.lose,
        standingCLub.goalsFor = req.body.goalsFor,
        standingCLub.goalsAgainst = req.body.goalsAgainst,
        standingCLub.goalDifference = req.body.goalDifference,
        await standingCLub.save()
        res.send("Update successful")
    } catch{
        res.status(404).send({error: "club is not found in standing"})
    }
}

const updateStandingAfterMatch = async (infor, res) => {
    try{
        const club1 = await standingDb.find({'clubId': infor.club1Id})
        const club2 = await standingDb.find({'clubId': infor.club2Id})
        if (infor.club1Goal > infor.club2Goal){     // club1 win
            diff = infor.club1Goal - infor.club2Goal
            //update Club1
            club1.point = club1.point + 3
            club1.goalDifference = club1.goalDifference + diff
            club1.goalsAgainst = club1.goalsAgainst + infor.club2Goal
            club1.goalsFor = club1.goalsFor + infor.club1Goal
            club1.win++
            club1.played++
            //update Club2
            club2.goalDifference = club2.goalDifference - diff
            club2.goalsAgainst = club2.goalsAgainst + infor.club1Goal
            club2.goalsFor = club2.goalsFor + infor.club2Goal
            club2.lose++
            club2.played++
        } else if (infor.club1Goal < infor.club2Goal){     // club2 win
            diff = infor.club1Goal - infor.club2Goal
            //update Club1
            club1.goalDifference = club1.goalDifference + diff
            club1.goalsAgainst = club1.goalsAgainst + infor.club2Goal
            club1.goalsFor = club1.goalsFor + infor.club1Goal
            club1.lose++
            club1.played++
            //update Club2
            club2.point = club2.point + 3
            club2.goalDifference = club2.goalDifference - diff
            club2.goalsAgainst = club2.goalsAgainst + infor.club1Goal
            club2.goalsFor = club2.goalsFor + infor.club2Goal
            club2.win++
            club2.played++
        } else{                                       //drawn
            //update Club1
            club1.point = club1.point + 1
            club1.goalsAgainst = club1.goalsAgainst + infor.club2Goal
            club1.goalsFor = club1.goalsFor + infor.club1Goal
            club1.drawn++
            club1.played++
            //update Club2
            club2.point = club2.point + 1
            club2.goalsAgainst = club2.goalsAgainst + infor.club1Goal
            club2.goalsFor = club2.goalsFor + infor.club2Goal
            club2.drawn++
            club2.played++
        }

    } catch {
        res.status(404).send({error: "can't update"})
    }
}

const deleteClubStanding = async (req, res) => {
    try{
        const club = await standingDb.findById(req.params.standingId)
        await club.remove()
        res.send("delete sucessful!")
    }catch{
        res.status(404).send({error: "club is not found in standing"})
    }
}

export {
    getStanding,
    getStandingOnSeason,
    createNewClubToStanding,
    updateStanding,
    updateStandingAfterMatch,
    deleteClubStanding,
}  