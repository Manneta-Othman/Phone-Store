import  Listing  from "../models/listing.model.js"
import { errorHandler } from "../utils/error.js"

export const createListing = async (req, res, next) => {

  try {
    const listing = await Listing.create(req.body)
    return res.status(200).json(listing)
  } catch (err) {
    next(err)
  }

}


export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id)

  if(!listing){
    return next(errorHandler(404, 'listing not found'))
  }

  if(listing.userRef !== req.user.id){
      return next(errorHandler(401, 'you can only delete your own listings'))
    }

  try {
    await Listing.findByIdAndDelete(req.params.id)
    return res.status(200).json('listing has been deleted')

  } catch (err) {
    next(err)
  }
}


export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id)

  if(!listing){
    return next(errorHandler(404, 'listing not found'))
  }

  if(listing.userRef!== req.user.id){
      return next(errorHandler(401, 'you can only update your own listings'))
    }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return res.status(200).json(updatedListing)

  } catch (err) {
    next(err)
  }
}