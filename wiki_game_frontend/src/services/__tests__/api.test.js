import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { startGame, continueGame, endGame } from '../api';

let mock;

beforeAll(() => {
    mock = new MockAdapter(axios);
});

afterEach(() => {
    mock.reset();
});

it("start game returns game data", async () => {

    const gameData = {
        data: {
            startImage: 'img1',
            targetImage: 'img2',
            levelImages: ['i1', 'i2', 'i3', 'i4', 'i5']
        }
    }

    mock.onGet('/api/game').reply(200, gameData);

    const result = await startGame();

    expect(mock.history.get[0].url).toEqual('/api/game');
    expect(result.data).toEqual(gameData.data);
});

it("continue game returns next images data", async () => {

    const nextImagesData = {
        data: ['i1', 'i2', 'i3', 'i4', 'i5']
    }

    mock.onPut('/api/game/continue', { selectedTags: "tags" }).reply(200, nextImagesData);

    const result = await continueGame({ selectedTags: "tags" });

    expect(mock.history.put[0].url).toEqual('/api/game/continue');
    expect(result).toEqual(nextImagesData);
});

it("end game connects to endpoint to send game details", async () => {
    const gameDetails = {
        username: '',
        email: '',
        highscore: '',
        time: '',
        startImageURL: '',
        targetImageURL: ''
    }

    mock.onPost('/api/game/end', gameDetails).reply(200);

    const result = await endGame(gameDetails);

    expect(mock.history.post[0].url).toEqual('/api/game/end');
})
