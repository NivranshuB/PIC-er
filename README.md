# PIC-er

*SOFTENG 750 Group Charcoal Cats*

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Overview](#project-overview)
- [Project Features](#project-features)
- [Workflow](#workflow)
- [Team Organisation](#team-organisation)

## Introduction

Inspired by the Wikipedia game [Wiki-race](https://en.wikipedia.org/wiki/Wikipedia:Wikirace), PIC-er is a React-based web game using the MERN stack.

Instead of navigating Wikipedia hyperlinks, the user must navigate through images. The player is assigned a starting image and a target image. 5 mostly random images are displayed to the player. They must pick one of the 5 images they think will best lead them to their target image.

The goal is to get to the target image in the least number of clicks and in the shortest amount of time.

### Purpose of the game

After initially proposing quite a more challenging style game design we amended our game logic to cater to a wider audience. We decided to use both a 'time for completion' metric and an 'image clicks for completion' to cater to the two different type of players of our game.

Our game caters towards the following two types of players:

1. [Skill based] Players that want something intellectually challenging. These players will want to take their time and really prioritise how many image clicks they need to make to get to the target image. For these players the time metric does not mean too much and their main stimulation from the game is how they are able to link the start image to the next best image one at a time. They will treat this game as a careful observation game.

2. [Speed based] Players that want to speed through the game and test their reflexive abilities. These players would want to speed through the images to try and get from the start image to the target image as fast as possible. These players are stimulated by the speed with which they can navigate the application page. These players are motivated to improve their digital agility and dexterity and do not care much about following the 'links' from the start image to the target image, relying heavily on luck.

Our game provides two different ways to measure performance meaning that we can can cater to those that prefer a more challenging game (similar to our inspiration - the wiki game) and also to those who prefer a quick speedy challenge. In the future we would like to extend these two concepts into having two entirely different game modes for these two player demographics.

## Getting started

The project is separated into a frontend and a backend. 

Ensure the `.env` file is placed into the root of the directory (on the same level as this README file and the two folders, wiki_game_backend and wiki_game_frontend). The `.env` file contains information to connect to the MongoDB database.

Clone the repository:

`git clone https://github.com/UOA-CS732-SE750-Students-2022/project-group-charcoal-cats.git`

The best way to run the program is to open two separate terminals.

### For the backend:

`cd wiki_game_backend`

`yarn install`

`yarn start`

### For the frontend:

`cd wiki_game_frontend`

`yarn install`

`yarn start`

Find more info on the Frontend and Backend, including testing, below:

* [Frontend README](./wiki_game_frontend/README.md)
* [Backend README](./wiki_game_backend/README.md)

## Project Overview

The project utilises the MERN stack. Images and image tags have been retrieved from the [COCO Dataset](https://cocodataset.org/#home)

### Backend

MongoDB was used along with Express.

### Frontend

React was used to create the frontend in addition to Node.js. Node version: 16.14.0

Libraries used:
* Chakra UI component libary
  * Also used Chakra UI icons
* Auth0 for authentication
* Axios was used for HTTP API calls
* React router was used for smoother implementation of a single page application

### Testing

#### Backend

Game logic was primarily tested using Manual testing due to the game logic being difficult to test across multiple image clicks. Image objects also could only be retrieved by the frontend but not modified dynamically, therefore testing express endpoints was not crucial for the game's functionality. Furthermore, the functions interacting with image objects used an element of randomisation meaning manual testing was able to more efficiently test out the game logic on the backend side compared to unit/module testing.

A test-frontend stub was also created early during development to test out the communication of game and image objects from the frontend to the the backend using express.

Jest was used to test the backend. MongoMemoryServer was used as an in-memory version of the MongoDB. Leaderboard was tested to ensure the correct score details get uploaded to the Database for a new entry. Also ensures the correct data is retrieved for the global and personal leaderboards.

Postman was used to ensure the API calls were working correctly. Postman was also used to test that game objects were being communicated accurately between the server and the MongoDB instance.

#### Frontend

Axios Mock adapter was used to ensure the frontend sends the correct data to the backend. Tests were used to ensure the correct calls to start, continue and end game were made. Test cases were also created to test the retrieval of personal and global leaderboard data as well as the creation of new leaderboard entries.

Unit testing was carried out manually as the elements of the UI were too dependent on other modules to be tested separately. 

Figma was utilised to design UI prototypes and test out different ideas for the components of the web application. This was done early in the development process to settle on a user interface design before commencing the coding of the frontend on React.

## Project Features

### Home Page

![image](https://user-images.githubusercontent.com/68992239/168456569-707eb54d-f0b7-4a73-b69d-924ee87737c1.png)

* Play: Play the game
* Leaderboard: View the leaderboard (personal and global)
* Help: View a tutorial for those that need more assistance in how to play the game

### Game Page

![image](https://user-images.githubusercontent.com/68992239/168460250-cb2149ea-3c53-4d8b-b013-37a29aadfc78.png)

* When a game begins, display the starting image, taget image, and 5 other images. The game is designed so that one of the images is the 'closer image' that the user should click. The other 4 images are randomised images that may lead the user to the target image, or may lead them down the wrong track.
* The game displays the time and the number of clicks during the game.
* A Restart button is also provided if the user feels stuck and wants to start the game again.
* If the user would like some assistance, they can also hover over the hint tag to reveal the target image tags:

![image](https://user-images.githubusercontent.com/68992239/168460290-852a2ba7-25d0-4e34-962c-21e678609842.png)

* The user is able to click on any of the images to open a larger version of the image:

![image](https://user-images.githubusercontent.com/68992239/168456580-c1f07356-5203-497b-a029-7458acd2ad35.png)
  
* If a user clicks on one of the 5 selectable images, they are also presented with an option to select this image to progress the game further:

![image](https://user-images.githubusercontent.com/68992239/168456586-b5e30429-1e52-42c1-b881-808e28313947.png)

### Game End Page

![image](https://user-images.githubusercontent.com/68992239/168456595-8799c46c-8179-4f77-baa5-a1f721773344.png)

* When the user finds the target image, they are presented with the Game End page. This shows a summary of the game such as the starting, target image, the clicks taken and the time taken.
* The user is able to return home or play again to navigate straight to the Game Page again.
* One the left side of the screen, the user is presented with the global leaderboard. 
* A message is displayed to the user saying they are unable to view their personal high scores because they are not logged in.
* When the user is logged in, they are able to view their personal high scores:

![image](https://user-images.githubusercontent.com/68992239/168456600-f38ef991-03ed-4a44-87b2-a66e7934238d.png)

### Leaderboard Page

![image](https://user-images.githubusercontent.com/68992239/168456610-34ab4a1d-d3ab-4a99-a92b-483e59279e9b.png)

* The leaderboard page displays the same information as the leaderboard on the Game End Page but in a more readable form. 
* Whenever the leaderboard appears, the user is also able to select one of the leaderboard items to view a more in-depth overview of the game. This includes the starting and target images for that game:

![image](https://user-images.githubusercontent.com/68992239/168456625-8f998a46-ef32-4a9e-b691-7b848dfed05d.png)

* Inside this modal, the user is able to click on the image to view a larger version of the image, the same as during the game.

* The same message appears if the user is not logged in:

![image](https://user-images.githubusercontent.com/68992239/168456631-d21580bc-54ed-43c4-b850-407c706efc8b.png)

### Help Page


* Displays a tutorial on how to play the game and some of the features available

### Navbar

* Displays the Logo, that also functions as a home button, as well as the Signup, Login, and depending on the state, a Logout button

### Login Button

Redirects to the Auth0 Login page

![image](https://user-images.githubusercontent.com/68992239/168464257-888ad34a-dc39-4349-ab60-5c3407ba6bed.png)

### Signup Button

Redirects to the Auth0 Signup page

![image](https://user-images.githubusercontent.com/68992239/168464288-2791748b-306f-4d65-9f8d-4c9860a7ff36.png)

### Logout Button

If the user is logged in, the Signup, and Login buttons are hidden and replaced with the Logout Button. The username of the current logged in user is also displayed

![image](https://user-images.githubusercontent.com/68992239/168456644-6a7dbfd2-c439-4991-a515-03fb1933cc50.png)

![image](https://user-images.githubusercontent.com/68992239/168456647-623e5346-ebde-485b-859f-0251c4a7af82.png)

## Workflow

* Agile

* Shared GitHub repo model. Feature branching workflow was used.

* When a feature is completed on a branch, create a pull request that should be reviewed by at least one other member of the team before being merged into main.

## Team organisation

Frontend: Corban, Calvin

Backend: Nivran, Joe

Meetings were held relatively regularly, at least once a week when possible and when the team was able to work on the project.

The frontend and backend would also have frequent meetings, often multiple shorter meetings per week to catch up. Constant communication was done through Discord or Messenger. Cross sub-team communication was also performed when required.
