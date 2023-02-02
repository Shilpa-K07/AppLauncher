# SE-Apps common

## Backend Requirements

1. NPM - [Official Node.js Website](https://nodejs.org/)
2. ArangoDb - [Official ArangoDb Website](https://www.arangodb.com/download/)

## One Time Procedure
1. In Terminal
   1. ``npm install typescript -g``
   2. ``npm run install:all``
   
## Backend Application Requirements
  1.  Database setup :
    1. cd < arangodb installation path 
      Example: G:/ArangoDB3-3.8.2/user/bin
    2.  Start ArangoDb service by terminal command : go to usr/bin folder of arangoDb   and use terminal command  as 
    ``arangod --server.endpoint tcp://0.0.0.0:8529 \ --database.directory standalone &``
  2. run nats-server.exe file from downloded folder.  
  3. pysvn-setup : 
    1. Download (download repository code from gitlab) and set up svn-interface.
    2. refer readme.md file from svn-interface to setup and install all required libraries.
  4. in Project
    1. create .env file in backend directory as per .envSample file.
    2. ask project maintainer for .env credentials.
  5. in Project
    1. create .env file in backend directory as per .envSample file.
    2. ask project maintainer for .env credentials.
  6. In Terminal
    1. ``cd backend``
    2. ``npm install`` (one time procedure)
    3. ``npm run dev``

## Frontend Requirements
1. in Project
   1. create .env file in frontend directory refer .envSample file
   2. ask project maintainer for .env credentials
   3. You can configure frontend port in frontend/package.json file inside script tag.
    "scripts": {
       "serve": "vue-cli-service serve --port 4000 --open"
    }
2. In Terminal
   1. ``cd frontend``
   1. ``npm install`` (one time procedure)
   2. ``npm run serve``
  
## CkEditor 5 build configuration in frontend folder
1. after npm install, copy @ckeditor5-classic folder from frontend folder and put in frontend > node_modules.
2. you can modify ckeditor configuration accordingly.


## External Requirements(oauth)
1. Github
 1. refer (https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) for github oauth configuration.
 2. add application name and other details if required
 3. get github-client-Id and github-client-secret and update in application setting page under 'Github' tab (click on gear icon from top navbar to access appliction setting page).
 4. put Homepage URL ex. (http://localhost:"YOUR Backend Port No"/api/se)  ex.  (http://localhost:6000/api/se) 
 5. put Authorization callback URL ex. as (http://localhost:6000/api/se/task-select-ci/github/application/login/github/return)  where http://localhost:6000 is backend url

2. Gitlab
 1. go to profile icon at right -> click on "Edit Profile" -> click on "Applications" from sidebar.
 2. Add new Application by entering all details.
 3. put Callback URL ex. as (http://localhost:6000/api/se/task-select-ci/users/auth/gitlab/callback) where http://localhost:6000 is backend url
 4. get Application Id and update in application setting page under 'Gitlab' tab (click on gear icon from top navbar to access appliction setting page).


## How to access application
Once both frontend and backend servers are up and running then access the application from localhost:'your Configured port in package.json'
 1. create new user by sign-up
 2. create new project 
 3. add roles and rights 
 4. add and invite members in team 
 5. access other applications from sidebar
 