const mongoose = require('mongoose');

const {MONGODB_URL} = process.env;

exports.connect = () => {
    mongoose.connect(MONGODB_URL,{ useNewUrlParser: true,  useUnifiedTopology: true })
    .catch(error => console.log(error))
 const db = mongoose.connection
 db.on('error', console.error.bind(console, "connection error"));
 db.once('open', () => {
     console.log("mongodb connection successfully");
 })
    // mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    // .then(()=>{
    //     console.log("mongodb connection successfully");
    // })
    // .catch((error)=>{
    //     console.log("database connection failed");
    //     console.error(error);
    //     process.exit(1);
    // });
}; 