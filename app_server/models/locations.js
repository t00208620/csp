const mongoose = require('mongoose');
const openingTimeSchema = new mongoose.Schema({
days: {
type: String,
required: true
},
opening: String,
closing: String,
closed: {
type: Boolean,
required: true
}
});
const reviewSchema = new mongoose.Schema({
author: String,
noOfPassengers: {
type: Number
},
reviewText: String,
createdOn: {
type: Date,
'default': Date.now
}
});
const locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  destination: String,
  noOfPassengers: {type: Number},
  facilities: [String],
  departTime: [String],
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});
mongoose.model('Location', locationSchema);
