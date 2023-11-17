import express from 'express';
import { createListing } from '../controller/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.post('/listing', verifyToken, createListing)

export default router