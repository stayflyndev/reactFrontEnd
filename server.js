const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require('./routes/api/items');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// routes
app.use('/api/items', items)

//db config
const db = require('./config/keys').mongoURI;

//connection
mongoose
.connect(db)
.then(() => console.log ("Mongo DB Connected.."))
.catch((error) => console.log(error));




const port = process.env.PORT || 5000; 
//bodyparser middleware

app.listen(port, () => console.log(`Server started on port ${port}`));