import express from 'express';
import path from 'path';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

// Setup Express
const app = express();
const port = process.env.PORT || 3001;

// Setup body-parser
app.use(express.json());

// Setup our routes.
import routes from './routes';
app.use('/', routes);

//Setup mongo connection
dotenv.config({ path: '..\\.env'});
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.s2hea.mongodb.net/PictureRace?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
export let dbConnection, imageCollection, scoreCollection;

//Connect server to MongoDB instance
client.connect((err, c) => {
    if (err) {
        console.error(err)
    } else {
        console.log("Successfully connected to MongoDb server")
        dbConnection = c.db("PictureRace");
        imageCollection = dbConnection.collection('ImageCollection');
        scoreCollection = dbConnection.collection('ScoreCollection');   
    }

})

// Make the "public" folder available statically
app.use(express.static(path.join(__dirname, '../public')));

// Serve up the frontend's "build" directory, if we're running in production mode.
if (process.env.NODE_ENV === 'production') {
    console.log('Running in production!');

    // Make all files in that folder public
    app.use(express.static(path.join(__dirname, '../../frontend/build')));

    // If we get any GET request we can't process using one of the server routes, serve up index.html by default.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
    });
}

//Start listening on port
app.listen(port, () => console.log(`App server listening on port ${port}!`));
