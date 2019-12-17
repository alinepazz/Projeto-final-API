
const mongoose = require('mongoose');
const DB_URI=process.env.MONGODB_URI


process.env.PORT

function connect () {
    mongoose.connect(DB_URI, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true})
        .then(() => console.log(" Uhuuulll Conectamos ao mongoose!"))
        .catch(err => console.error("An error has occured", err));
}
module.exports = { connect }
