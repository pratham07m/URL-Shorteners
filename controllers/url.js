import {nanoid} from 'nanoid'
import { URL } from '../models/url.js';

async function handleGenerateNewShortURL(req , res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "url is required"})
   const shortID = nanoid(8);

   await URL.create({
    shortId : shortID,
    redirectURL : body.url,
    vistiHistory:[],
   })
   return res.json({id:shortID})
}
export {handleGenerateNewShortURL}