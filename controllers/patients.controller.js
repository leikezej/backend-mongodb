const db = require("../models");
const Patient = db.patient;

// Get Patients
exports.getPatients = (req, res) => {
    PatientsSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

// Create Patient
exports.create = (req, res, next) => {
    PatientsSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

// Get Single Patient
exports.getOne = (req, res) => {
    PatientsSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};

// Update Patient
exports.updateOne = (req, res, next) => {
    PatientsSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Patient successfully updated!')
        }
    })
};

// Delete Patient
exports.deleteOne = (req, res, next) => {
    PatientsSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
}