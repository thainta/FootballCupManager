import e from "express";
import UserDb from "../models/database/userDb.js";
const getAllUser = (req, res) =>{
    UserDb.find().then((data) => {
        res.send(data);
    });
}

export {getAllUser};