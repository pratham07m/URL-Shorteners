import express from "express"
import { handleGenerateNewShortURL , handelGetAnalytics } from "../controllers/url.js";
const router = express.Router();

router.post('/' , handleGenerateNewShortURL)

router.get('/analytics/:shortId' , handelGetAnalytics)

export default router;