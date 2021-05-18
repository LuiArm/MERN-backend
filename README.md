[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# MERN Lab

Get ready to build your first MERN app! For this lab, your goal is to build a
MERN app with Express on the back-end and React on the front-end. 

## Prerequisites

- Mongo, Mongoose, Express and Node
- React, Components, State and Props
- React Component Lifecycle Methods (useEffect)
- React Router
- A pull request will be used for submission of this assignment

## Instructions

1.  Fork and Clone this repo
1.  Fulfill the listed requirements.
1.  Create a Pull request on this repository with links to your repo(s).

Unlike most labs, for this one you will submit your work by **making a pull request**. If a pull request has not been performed up until now then the instructor will walk the class through performing one at the completion of this readme.

Edit the links.md file with your project links before you do a pull request, also include the links in the pull request notes.

Create another repo for the Frontend and add a link to that repo when you make the Pull request. 

## Requirements

Here are the requirment:

- Build a simple MERN - Mongo-Express-React-Node App
- Must contain at least one model with full CRUD (If Want a Challenge, do a second related model, like "All Pets have one Owner" or "All Restaurants have Many Customers"
- React on the front end must include `React Router`
- Node on the backend must be configured as a `RESTFull` API
- Frontend and Backend must be deployed

**Resources on Deployment**
- [Express & React Deployment](https://git.generalassemb.ly/SEIR-329/ExpressFrontendDeploy/blob/master/deploy.md)
- [Blog: Deploying Node Apps to Heroku](https://tuts.alexmercedcoder.com/2021/4/deploying_node_heroku/)
- [Blog: Deploying Frontend Apps to Netlify/Vercel](https://tuts.alexmercedcoder.com/2021/1/deployreact/)

**Resoures on Mongo Relationships**
- [VIDEO: Mongo Relationships using ObjectID and Populate](https://www.youtube.com/watch?v=cu6VQgT3EEI)
- [VIDEO: Mongo Relationships using Embedded Relationships](https://www.youtube.com/watch?v=YDLjahSfZ10)
- [VIDEO: Many to Many Relationship using a Joint Collection](https://www.youtube.com/watch?v=GfMk5DQcuqQ)

### Backend
Your app should have a back-end build with Express that persists data to a
MongoDB database using Mongoose. Your Express app should return JSON data to
your React front-end.

Backend server must be deployed via Heroku.

Backend must be configued for CORS.

### Frontend
The front-end for your simple MERN app should be built with React. You may use fetch or Axios to make your frontend API Calls.

Use React Router to build out separate 'views' for creating, editing, updating and deleting instances of your model.

Your goal should be to have full CRUD functionality on one model with a React front-end and Express back-end.

Frontend server must be deployed via Netlify.

## Bonus

- Style it and make Kenny proud!!!
  - Use Sass OR
  - Use Styled Components (Watch Bonus Lesson in Class Wiki Pinned to Classroom Channel) OR
  - Use ReactStrap/Bootstrap React 
  
- Add `useContext` to create a global state

- Add a third model as a sub-document. Finish full CRUD on your first two models before
adding any additional subdocuments. 

- Add JWT Authentication - [Playlist that Includes how to build JWT Auth with Express & React](https://www.youtube.com/playlist?list=PLY6oTPmKnKbZsBHeBGNL9suAPIJdLaVk9)

