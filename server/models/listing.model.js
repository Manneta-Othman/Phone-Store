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
    }
  }, 
  {
    timestamps: true,
    strict: false
  }
)

export const Listing = mongoose.model("Listing", listingSchema)