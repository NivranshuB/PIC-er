import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.s2hea.mongodb.net/PictureRace?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let dbConnection, imageCollection;

const app = express();
const port = 3000;

client.connect((err, c) => {
    if (err) { 
    console.error(err)    
    return
    }
    console.log("Successfully connected to MongoDb server")
    dbConnection = c.db("PictureRace");
    imageCollection = dbConnection.collection('ImageCollection');
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

