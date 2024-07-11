const mongoose =require("mongoose")
.connect("mongodb+srv://Lodhi_kajal:04iLX3Wnplmdypjl@cluster0.zf9mge5.mongodb.net/blogapp")
.then(() => {
    console.log("Database connected");
    
}).catch((err) => {
    console.log(err.message);
});