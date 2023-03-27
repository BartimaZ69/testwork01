const express = require('express')
var cors = require('cors')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/routes');
mongoose.set('strictQuery', false);

 
app.use(cors(
  {
    origin: "http://localhost:4200"
  }
 
));
 
app.listen(9992,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});
 
async function connectToDB() {
  try {
    await mongoose.connect("mongodb+srv://i5group:12345@i5.uxk5pkv.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Successfully connected to DB");
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
}

connectToDB();


app.use(express.json());
app.use(routes);

