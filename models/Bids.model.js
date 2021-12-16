const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

require("./Art.model")
require("./User.model")

const bidsSchema = new mongoose.Schema({
    createdAt: {
      type: Date,
      default: Date.now
    },
    bid: Number,
  user: {
    ref: "user",
    type: Schema.Types.ObjectId
  }, 
  artId : {
    ref: "art",
    type: Schema.Types.ObjectId
  }
  }, { timestamps: true });

const BidsModel = model("bids", bidsSchema);

module.exports = BidsModel;
