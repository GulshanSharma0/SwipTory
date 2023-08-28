const mongoose = require("mongoose");

const storiesSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type:String
  },
  category:{
    type:String
  },
  likeCount:{
    type:Number,
    default:0
  },
  storylikedby:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique:true
    },
  ],
  
});

const Story = mongoose.model("Story", storiesSchema);

module.exports = Story;