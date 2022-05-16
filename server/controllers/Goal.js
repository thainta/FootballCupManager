import goalDb from '../models/database/goalDb.js'

const getAllGoals = async (req, res) => {
    goalDb.find().then((data)=>{
        res.send(data);
    });
}

const getGoalById = async (req, res) => {
    goalDb.findById(req.params.goalId).then((data) =>{
        res.send(data);
    })
}

const createNewGoal = async (req, res) => {
    const goal = new goalDb({
        typeGoal: req.body.typeGoal,
        goalTime: req.body.goalTime,
        playerId: req.body.playerId,
        matchId: req.body.matchId
    })
    await goal.save()
    .then((data)=>{
        res.send("Tạo thành công");
        res.send(data);
    }, err => {
        res.send(err.message); 
    })
    res.send({data: goal})
}

const updateGoal = async (req, res) => {
    try{
        const goal = await goalDb.findById(req.params.goalId)
        goal.typeGoal = req.body.typeGoal
        goal.goalTime = req.body.goalTime
        goal.playerId = req.body.playerId
        goal.matchId =  req.body.matchId
        await goal.save()
        res.send("Update successful")
    } catch{
        res.status(404).send({error: "Goal is not found"})
    }
    
}

const deleteGoal = async (req, res) => {
    try{
        const goal = await goalDb.findById(req.params.goalId)
        await goal.remove()
        res.send("delete sucessful!")
    }catch{
        res.status(404).send({error: "Goal is not found"})
    }
}

export {
    getAllGoals,
    getGoalById,
    createNewGoal,
    updateGoal,
    deleteGoal
}   