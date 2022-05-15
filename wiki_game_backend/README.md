# Install

`cd wiki_game_backend`

`yarn install`

`yarn start`

# Testing

Ensure the line:
`import { scoreCollection } from '../app-data/__tests__/leaderboard-dao.test';` is uncommented and the line:
`import { scoreCollection } from '../server'` is commented out inside the `wiki_game_backend/src/app-data/leaderboard-dao.js` file in order to test.

`cd wiki_game_backend`

`yarn test`

Remember to reverse the comment changes mentioned above when finished testing.