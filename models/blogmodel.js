const mongoose = require ("mongoose")
const { create } = require("./usermodel")

const blogmodel = mongoose.Schema({

    title:String,
    description:String,
    blogImage:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{timestamps:true})

module.exports = mongoose.model("blog",blogmodel)