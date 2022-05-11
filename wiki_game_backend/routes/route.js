import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import { getRandomIntBetweenValues } from '../src/gameplay'

dotenv.config({ path: '..\\.env'});
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.s2hea.mongodb.net/PictureRace?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let dbConnection, imageCollection, scoreCollection;

const app = express();
const port = 3000;

client.connect((err, c) => {
    if (err) { 
    console.error(err)
    console.error(`DB username: ${process.env.DB_USERNAME}`)    
    console.error(`DB password: ${process.env.DB_PASSWORD}`)
    console.error(process.cwd())    
    return
    }
    console.log("Successfully connected to MongoDb server")
    dbConnection = c.db("PictureRace");
    imageCollection = dbConnection.collection('ImageCollection');
    scoreCollection = dbConnection.collection('ScoreCollection');
})

app.listen(port, () => { console.log(`Express listening on port ${port}`) });

//Basic root path.
app.get('/', (req, res) => {res.send('Hello world.')});

//Example to get all images from the ImageCollection collection.
app.get('/allPictures', (req, res) => {
    imageCollection.find({}).toArray().then(output => res.send(output))
});

//Example to get only images that contain 'leisure' in their imageTags array.
app.get('/leisureOnly', (req, res) => {
    imageCollection.find({imageTags: 'leisure'}).toArray().then(output => res.send(output))
})

app.put('/closerImage', (req, res) => {
    let tagsMatching = req.body.tagsMatching;
    imageCollection.find({imageTags: {$all: tagsMatching}}).toArray()
        .then((closerImageArray) => {return closerImageArray.length > 0 ? closerImageArray[getRandomIntBetweenValues(0, closerImageArray.length)] : {} })
        .then((closerImageArray) => res.send(closerImageArray));
})

app.get('/randomImages', (req, res) => {
    let NUM_OF_IMAGES = 5
    imageCollection.aggregate([{ $sample: {size: NUM_OF_IMAGES - 1} }]).toArray()
    .then(output => res.send(output))
})

app.post('/end', (req, res) => {
    scoreCollection.insertOne({
        username: req.body.username,
        email: req.body.email,
        highscore: req.body.highscore,
        startImageURL: req.body.startImageURL,
        targetImageURL: req.body.targetImageURL,
        time: req.body.time
    }).then(() => res.sendStatus(200)).catch((err) => console.error(err))
})

app.get('/topHighscores', (req, res) => {
    scoreCollection.find().sort( {highscore: 1}).limit(10).toArray().then((output) => res.send(output))
})

export default app;

