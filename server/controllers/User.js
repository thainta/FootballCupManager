import UserDb from "../models/database/userDb.js";

const getAllUser = (req, res) => {
    UserDb.find().then((data) => {
        res.send(data);
    }, (err) => {
        res.status(400).send(err.message);
    });
}

const getUserById = (req, res) => {
    let query = req.params;
    UserDb.findOne(query).then((data) => {
        res.send(data);
    }, (err) => {
        res.status(400).send(err.message);
    });
};

const createNewUser = (req, res) => {
    console.log(req.body);
    let user = new UserDb({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        gender: req.body.gender,
        dayOfBirth: req.body.dayOfBirth,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type,
        identityCard: req.body.identityCard
    });

    user.save().then((data) => { 
        res.send(data);      
    }, (err)=>{
        res.status(400).send(err.message);
    });
}

const updateUser = (req, res) => {
    const query = req.params;
    UserDb.findOneAndUpdate(query,{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        gender: req.body.gender,
        dayOfBirth: req.body.dayOfBirth,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type,
        identityCard: req.body.identityCard
    }, (err, user) => {
        if(err){
            res.send(err.message);
        }
        res.send(user);
    });
}

const deleteUser = (req, res) => {
    const query = req.params;

    UserDb.findOneAndRemove(query, (err, user) => {
        if (err) {
        res.send("Remove successfully");
        }
        res.send(user);
    });
}

export {
    getAllUser, 
    getUserById, 
    createNewUser,
    updateUser,
    deleteUser
};