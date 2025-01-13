const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/daily-blogs").then(() => console.log("Database connected."))
.catch((error) => console.log("MongoDb Error:", error));

app.use(express.urlencoded({extended: false}));
app.set("view engine","ejs");
app.set("views", path.resolve("./views"));


app.get("/",(req,res)=>{
    return res.render("home");
})

app.use("/user",userRouter);
app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));