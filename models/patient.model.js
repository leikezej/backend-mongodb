const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ip = require('ip');


const PatientSchema = new mongoose.Schema({
  // _id: new Schema.Types.ObjectId,
    // name: {
    //   firstName: String,
    //   lastName: String
    //   },
    fullname: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    mobile: {
      type: Number,
      required: [true, 'What is your contact number?']
    },
  avatar: {
      type: Buffer
    },
    dob: {
        type: Date
    },
    address: {
      type: String
    },
    isAccountVerified: {
      type: Boolean
    },
    isAdmin: {
      type: Boolean
    },
    accountCreated: {
      type: Date,
      default: Date.now
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        // type: Schema.Types.ObjectId,
        enum: ["patient", "admin", "moderator"],
        default: "patient",
        ref: "Role",
      }
    ],
    ip: {
      type: String,
      default: ip.address()
      },
      // attendance: [{ type: Schema.Types.ObjectId, ref: 'Attendance' }],
  }, {
    collection: 'patients',
    timestamps: true,
    }
);

const Patient = mongoose.model("Patient", PatientSchema, "Patient");
module.exports = Patient;