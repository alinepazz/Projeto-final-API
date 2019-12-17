require('dotenv').load
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URI

function connect () {
    mongoose.connect(MONGO_URL, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true})
        .then(() => console.log(" Uhuuulll Conectamos ao mongoose!"))
        .catch(err => console.error("An error has occured", err));
}
module.exports = { connect }
