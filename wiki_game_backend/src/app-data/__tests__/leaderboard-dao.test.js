import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { addScore, getLocalLeaderboard, getGlobalLeaderboard, clearLocalLeaderboard } from '../leaderboard-dao';

let mongod;
let score1, score2, score3;
export let scoreCollection

/**
 * Before all tests, create an in-memory MongoDB instance so we don't have to test on a real database,
 * then establish a mongoose connection to it.
 */
beforeAll(async () => {

    mongod = await MongoMemoryServer.create();

    const connectionString = mongod.getUri();
    await mongoose.connect(connectionString, { useNewUrlParser: true });

});

/**
 * Before each test, intialize the database with some data
 */
beforeEach(async () => {
    scoreCollection = await mongoose.connection.db.createCollection('ScoreCollection');

    score1 = {
        username: 'bob',
        email: 'bob.com',
        highscore: 2,
        startImageURL: 'start-img',
        targetImageURL: 'target-img',
        time: '10:10pm'
    };

    score2 = {
        username: 'tim',
        email: 'tim.com',
        highscore: 4,
        startImageURL: 'start-img',
        targetImageURL: 'target-img',
        time: '10:10pm'
    };

    score3 = {
        username: 'gary',
        email: 'gary.com',
        highscore: 6,
        startImageURL: 'start-img',
        targetImageURL: 'target-img',
        time: '01:10pm'
    };

    await scoreCollection.insertMany([score1, score2, score3]);
});

/**
 * After each test, clear the database entirely
 */
afterEach(async () => {
    await mongoose.connection.db.dropCollection('ScoreCollection');
});

/**
 * After all tests, gracefully terminate the in-memory MongoDB instance and mongoose connection.
 */
afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
});

it('add score to leaderboard', async () => {

    const body = {
        username: 'jim',
        email: 'jim.com',
        highscore: 10,
        startImageURL: 'start-img1',
        targetImageURL: 'target-img1',
        time: '11:03'
    }

    const newEntry = {
        body: {
            username: 'jim',
            email: 'jim.com',
            highscore: 10,
            startImageURL: 'start-img1',
            targetImageURL: 'target-img1',
            time: '11:03'
        },
    }

    await addScore(newEntry);

    const fromDb = await mongoose.connection.db.collection('ScoreCollection').findOne({ username: newEntry.body.username });
    expect(fromDb).toBeTruthy();
    expect(fromDb.email).toBe('jim.com');
    expect(fromDb.highscore).toBe(10);
    expect(fromDb.startImageURL).toBe('start-img1');
    expect(fromDb.targetImageURL).toBe('target-img1');
    expect(fromDb.time).toBe('11:03');
});

it('gets local leaderboard', async () => {
    const local = await getLocalLeaderboard('bob');
    expect(local).toBeTruthy;
    expect(local.length).toBe(1);
    expect(local[0].email).toBe('bob.com');
    expect(local[0].highscore).toBe(2);
});

it('get local leaderboard for a user that does not exist', async () => {
    const local = await getLocalLeaderboard('jeff');
    expect(local).toBeFalsy;
});

it('get global leaderboard', async () => {
    const global = await getGlobalLeaderboard();

    expect(global).toBeTruthy;
    expect(global.length).toBe(3);
    expect(global[0].username).toBe('bob');
    expect(global[1].username).toBe('tim');
    expect(global[2].username).toBe('gary');
});

it('clear local leaderboard', async () => {

    await clearLocalLeaderboard('bob');

    const local = await getLocalLeaderboard();
    expect(local.length).toBe(0);
});