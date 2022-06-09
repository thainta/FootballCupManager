import clubDb from '../models/database/clubDb';

const getAllClub = (req, res) => {
    clubDb.find().then((data) => {
        res.send(data)
    }, (err) => {
        res.status(400).send(err.message);
    });
}

const getClubById = (req, res) => {
    let query = req.params;
    clubDb.findOne(query).then((data) => {
        res.send(data);
    }, (err) => {
        res.status(400).send(err.message);
    });
}

const createNewClub = (req, res) => {
    let club = new clubDb ({
        fullName: req.body.fullName,
        shortName: req.body.shortName,
        city: req.body.city,
        owner: req.body.owner,
        logo: req.body.logo,
        coachId: req.body.coachId,
        stadiumId: req.body.stadiumId
    });

    club.save().then((data,) => {
        res.send(data);
    }, (err) => {
        res.status(400).send(err.message);
    });
}

const updateClub = (req, res) => {
    let query = req.params;

    clubDb.findOneAndUpdate(query, {
        fullName: req.body.fullName,
        shortName: req.body.shortName,
        city: req.body.city,
        owner: req.body.owner,
        logo: req.body.logo,
        coachId: req.body.coachId,
        stadiumId: req.body.stadiumId
    }, (err, raw) => {
        if(err) {
            res.status(400).send("ERROR")
        }
        res.send(raw);
    });
}

const deleteClub = (req, res) => {
    let query = req.params;

    clubDb.findOneAndDelete(query, (err, raw) => {
        if(err) {
            res.status(400).send("ERROR")
        }
        res.send(raw);
    })
}

export {
    getAllClub,
    getClubById,
    createNewClub,
    updateClub,
    deleteClub
}