const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/servicosApi';

function connect () {
    mongoose.connect(MONGO_URL,
        {useNewUrlParser: true},
        function (error) {
            if(error) {
                console.error("Ocorreu um erro:", error)
            }else{
                console.log("Conectamos ao mongoDB.")
            }
        }
        
    );
}
module.exports = { connect }