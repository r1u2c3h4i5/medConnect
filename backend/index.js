const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');
require('dotenv').config();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

routes(app); 
mongoose.connect("mongodb://localhost:27017/medconnect",{ useNewUrlParser: true,  useUnifiedTopology: true })
    .catch(error => console.log(error))
const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("mongodb connection successfully");
})



app.listen(PORT, function(req, res){
    console.log("application is listening on port 8000")

})