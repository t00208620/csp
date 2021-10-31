const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
username: {
type: String,
required: true
},
password: {
  type: String,
  required: true
  },
phoneNo: {String,
type: String,
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
const mainContentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  destination: String,
  noOfPassengers: {type: Number},
  facilities: [String],
  departTime: [String]
});
mongoose.model('Location', mainContentSchema);
