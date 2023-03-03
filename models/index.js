const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.booking = require("./booking.model");
db.patient = require ("./patient.model");
db.refreshToken = require("./refreshToken.model");
// db.upload = require ("./upload.model");

db.ROLES = ["patient", "moderator", "admin"];

module.exports = db;