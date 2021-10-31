

const mongoose = require('mongoose');
const dbURI = "mongodb+srv://user:password@cluster0.hhhm6.mongodb.net/Loc8r?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./locations');
