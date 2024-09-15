const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
    {
        fullname:String,
        username: String,
        email: String,
        password: String,
       blogs:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"blog",

            },
        ],
        profile:{
            type:String,
            default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        },
    },
    { timestamps: true }
);

userSchema.plugin(plm);

const UserCollection = mongoose.model("user",userSchema);

module.exports = UserCollection;