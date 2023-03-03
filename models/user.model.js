const mongoose = require("mongoose");
const ip = require('ip');

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  phone: {
    type: String
  },
    email: {
      type: String,
      trim: true,
      required: [true, "Please Provide Email Address"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Provide A Valid Email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please Add A Password"],
      minlength: 8,
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
  },  {timestamps: true});

const User = mongoose.model("User", UserSchema,  "User");
module.exports = User;