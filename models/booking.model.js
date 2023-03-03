const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
  name: {
    type: String,
    ref: "User"
  },
  time: {
    type: String,
    ref: "Patient"
  },
  date: {
    type: Date,
    default: Date.now()
  },
  published: Boolean,
  // attendance:  {
  //   type:  Boolean,
  //   default: false,
  //   ref: "Attendance"
  // }
}, {timestamps: true});


const bookingModel = mongoose.model('Booking', BookingSchema, "Booking");

module.exports = bookingModel;