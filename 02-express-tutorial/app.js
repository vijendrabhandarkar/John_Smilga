/* const express = require("express");
const app = express();

const people=require('./routes/people')
const auth=require("./routes/auth")
// static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json ---> to handle the payload from axios
app.use(express.json());

app.use("/api/people",people)
app.use("/login",auth)


app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
}); */

console.log("Program started");
const validator=require("validator")
//Node: validator is synchronous in nature
let isValid=validator.isEmail('arun')
console.log('Is email Valid',isValid);//false

isValid=validator.isEmail('ar1*!#$%^&*_un@gmail.com')
console.log('Is email Valid',isValid);//true
console.log("Program ended");
