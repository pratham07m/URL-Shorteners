import express from 'express'
import { connectToMongoDB } from './connect.js'
import urlRoute from './routes/url.js'
const app = express();
const PORT = 5000

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('mongodb connected'))

app.use('/url', urlRoute)

app.listen(PORT, () => {
    console.log(`app listen on http://localhost:${PORT}`);
})