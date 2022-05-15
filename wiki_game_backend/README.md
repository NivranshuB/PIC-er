# Getting Started
To install, run, or test the backend of the application, see the following instructions below:

# Installation & Running Backend
Before installing or running, please ensure the `.env` file has been placed in the root directory (on the same level as the main README, "wiki_game_backend" and "wiki_game_frontend" folders). This file is required to connect to the database, and to run the backend successfully.

Before installing or running, please navigate to the correct directory (wiki_game_backend) as seen below:

`cd wiki_game_backend`

To install the required dependencies, enter the following command:

`yarn install`

To start the backend, enter the following command:

`yarn start`

# Testing

## **Important**
Ensure the line:

`import { scoreCollection } from '../app-data/__tests__/leaderboard-dao.test';` 

is uncommented and the line:

`import { scoreCollection } from '../server'` 

is commented out inside the 

`wiki_game_backend/src/app-data/leaderboard-dao.js` 

file in order to test.

## Running the tests:
Please navigate to the correct directory (wiki_game_backend) as seen below:

`cd wiki_game_backend`

Run the tests, by entering the following command:

`yarn test`

*Remember to reverse the comment changes mentioned above when you have finished testing.*