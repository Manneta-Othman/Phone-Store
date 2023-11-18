import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true
    },
    images:{
      type: Array,
    },
    brand:{
      type: String,
    },
    regularPrice:{
      type: Number,
    },
    discountPrice:{
      type: Number,
    },
    color:{
      type: String,
    },
    ram:{
      type: Number,
    },
    storage:{
      type: Number,
    },
    description:{
      type: [],
    },
    userRef:{
      type: String,
      required: true
    }
  }, 
  {
    timestamps: true,
    strict: false
  }
)

const Listing = mongoose.model("Listing", listingSchema)

export default Listing