const mongoose = require('mongoose');                   // step:2

// schema 
const empSchema = mongoose.Schema({               // step:2
    name: String,
    email : String,
    age: Number,
    role : String ,
    city : String
})

// model

module.exports = mongoose.model('empdb',empSchema);              