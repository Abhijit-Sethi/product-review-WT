const express = require('express');
const app = express();
const cors = require("cors");
const connectToDatabase = require("./config/connectToDatabase"); 


connectToDatabase();

app.use(cors());

app.use(express.json({extended : false}));

app.get("/",(req,res)=>{res.json("Server is working")})

let PORT = process.env.PORT||5000;



app.use("/api/posts",require("./routes/posts.js"));
app.use("/api/users",require("./routes/users.js"));


app.listen(PORT , ()=> console.log(`Server is on port : ${PORT}`));