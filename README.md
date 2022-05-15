# PIC-er

SOFTENG 750 Group Charcoal Cats

Inspired by the Wikipedia game [Wiki-race](https://en.wikipedia.org/wiki/Wikipedia:Wikirace), PIC-er is a React-based web game using the MERN stack.

Instead of navigating Wikipedia hyperlinks, the user must navigate through images. The player is assigned a starting image and a target image. 5 mostly random images are displayed to the player. They must pick one of the 5 images they think will best lead them to their target image.

The goal is to get to the target image in the least number of clicks and in the shortest amount of time.

## Getting started

The project is separated into a frontend and a backend. 

Ensure the `.env` file is placed into the root of the directory (on the same level as this README file and the two folders, wiki_game_backend and wiki_game_frontend). The `.env` file contains information to connect to the MongoDB database.

The best way to run the program is to open two separate terminals.

### For the backend:

`cd wiki_game_backend`

`yarn install`

`yarn start`

### For the frontend:

`cd wiki_game_frontend`

`yarn install`

`yarn start`

Find more info on the Frontend and Backend below:
* [Frontend README](./wiki_game_frontend/README.md)
* [Backend README](./wiki_game_backend/README.md)

## Project Overview

The project utilises the MERN stack. Images and image tags have been retrieved from the [COCO Dataset](https://cocodataset.org/#home)

### Backend

MongoDB was used along with Express.

### Frontend

React was used to create the frontend in addition to Node.js

Libraries used:
* Chakra UI component libary
  * Also used Chakra UI icons
* Auth0 for authentication
* Axios was used for HTTP API calls
* React router was used for smoother implementation of a single page application

### Testing

#### Backend

Game logic was primarily tested using Manual testing due to the game logic being difficult to test across multiple image clicks.

Jest was used to test the backend. MongoMemoeryServer was used as an in-memory version of the MongoDB. Leaderboard was tested to ensure the correct gets uploaded to the Database for a new entry. Also ensures the correct data is retrieved for the global and personal leaderboards.

Postman was used to ensure the API calls were working correctly.

#### Frontend

Axios Mock adapter was used to ensure the frontend sends the correct data to the backend. Tests were used to ensure the correct calls to start, continue and end game were made. Calls to retrieve leaderboard data were also tested.

## Project Features

### Home Page


* Play: Play the game
* Leaderboard: View the leaderboard (personal and global)
* Help: View a tutorial for those that need more assistance in how to play the game

### Game Page



* When a game begins, display the starting image, taget image, and 5 other images. The game is designed so that one of the images is the 'closer image' that the user should click. The other 4 images are randomised images that may lead the user to the target image, or may lead them down the wrong track.
* The game displays the time and the number of clicks during the game.
* A Restart button is also provided if the user feels stuck and wants to start the game again.
* The user is able to click on any of the images to open a larger version of the image:
  
* If a user clicks on one of the 5 selectable images, they are also presented with an option to select this image to progress the game further:

### Game End Page


* When the user finds the target image, they are presented with the Game End page. This shows a summary of the game such as the starting, target image, the clicks taken and the time taken.
* The user is able to return home or play again to navigate straight to the Game Page again.
* One the left side of the screen, the user is presented with the global leaderboard. 
* A message is displayed to the user saying they are unable to view their personal high scores because they are not logged in.
* When the user is logged in, they are able to view their personal high scores

### Leaderboard Page

* The leaderboard page displays the same information as the leaderboard on the Game End Page but in a more readable form. Whenever the leaderboard appears, they user is also able to select one of the leaderboard items to view a more in-depth overview of the game. This includes the starting and target images for that game.
* Inside this modal, the user is able to click on the image to view a larger version of the image, the same as during the game.

### Help Page


* Displays a tutorial on how to play the game and some of the features available

### Navbar

* Displays the Logo, that also functions as a home button, as well as the Signup, Login, and depending on the state, a Logout button

### Login Button

Redirects to the Auth0 Login page

### Signup Button

Redirects to the Auth0 Signup page

### Logout Button

If the user is logged in, the Signup, and Login buttons are hidden and replaced with the Logout Button. The username of the current logged in user is also displayed

