const mongoose = require('mongoose');
const dbConfig = require('./config');

function connect() {
    let dbConnection = mongoose.connection;
    mongoose.connect(dbConfig.dbUrl , { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });
    dbConnection.once('open', () => {
        console.log("db started...");
    });
}
// mongoose.set("debug",true);

module.exports = {
    connect
}