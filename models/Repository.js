const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/servicosApi';

function connect () {
    mongoose.connect(MONGO_URL, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true})
        .then(() => console.log(" Uhuuulll Conectamos ao mongoose!"))
        .catch(err => console.error("An error has occured", err));
}
module.exports = { connect }
