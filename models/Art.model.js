const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');


require("./User.model")
require("./Bids.model")

let ArtSchema = new mongoose.Schema({
    artist: String,
    title: String,
    year: String,
    image: String,
    price: Number,
    days: Number,
    
    user: [{ 
        type: Schema.Types.ObjectId, 
        ref: "user" 
    }],
    bids: [{ 
        type: Schema.Types.ObjectId, 
        ref: "bids" 
    }],

},{ timestamps: true } )

let ArtModel = mongoose.model('art', ArtSchema)

module.exports = ArtModel;