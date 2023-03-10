const config = require("../config/auth.config");
const db = require('../models');

const { user: User, role: Role, refreshToken: RefreshToken,   } = db;

// GET
exports.findAll =  async (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// GET BY ID
exports.getUserById = async (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

// UPDATE USER DATA
exports.updateById = async (req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      user.username = req.body.username;
      user.email = req.body.email;
      user
        .save()
        .then(() => res.json("User Updated..."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

// DELETE BY ID
exports.deleteById = async (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json(`User with is now Deleted...`))
    .catch((err) => res.status(400).json("Error: " + err));
};


exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.patientBoard = (req, res) => {
  res.status(200).send("Patients Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
















// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

// exports.userBoard = (req, res) => {
//   res.status(200).send("User Content.");
// };

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };

// exports.moderatorBoard = (req, res) => {
//   res.status(200).send("Moderator Content.");
// };