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
    seller: [{ 
        type: Schema.Types.ObjectId, 
        ref: "user" 
    }],
    buyer: [{ 
        type: Schema.Types.ObjectId, 
        ref: "user" 
    }],
    bids: [{ 
        type: Schema.Types.ObjectId, 
        ref: "bids" 
    }],  
})

let ArtModel = mongoose.model('art', ArtSchema)

module.exports = ArtModel;