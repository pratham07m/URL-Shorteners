import express from 'express'
import { connectToMongoDB } from './connect.js'
import urlRoute from './routes/url.js'
import { URL } from './models/url.js';

const app = express();
const PORT = 5000

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('mongodb connected'))

    app.use(express.json());

app.use('/url', urlRoute)

app.get('/:shortId' , async(req , res)=>{
   const shortId = req.params.shortId;
   const entry =  await URL.findOneAndUpdate({
        shortId
    },{$push : {
        vistiHistory : {
            timestamp : Date.now(),
        }
    }})
    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => {
    console.log(`app listen on http://localhost:${PORT}`);
})