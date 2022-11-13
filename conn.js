const mongoose = require('mongoose');
const db = "mongodb+srv://piyushtale:piyushtale@cluster0.t7w7ipr.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db).then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{console.log(err)})
