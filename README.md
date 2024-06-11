# Database demonstration
This project is a simple demonstration of how to use express and mongoose on a node server to store and retrieve data.

# How to deploy
To deploy this project locally you have follow these steps;
1. clone the project from github
2. make sure nodejs / npm is installed
  - else install fnm. See instructions here: [fnm home](https://github.com/Schniz/fnm "Fast Node Manager") 
  - After installing fnm install the latest lts version of node (fnm install --lts)
3. Run "npm init"
4. Make sure you have access to a mongo database
  - you can check by running "mongosh" in your terminal if it is running locally
  - if not installed, install. See instructions here: [mongodb home](https://www.mongodb.com/docs/manual/installation/ "Install MongoDB")
  - you can also run mongodb here: [Atlas MongoDB in the cloud](https://www.mongodb.com/products/platform/atlas-database "Atlas MongoDB") - it shouldn't be much harder than installing it locally
      - **IF YOU ARE RUNNING MONGODB IN THE CLOUD, YOU HAVE TO CHANGE THE CODE AT LINE 9 IN INDEX.JS**
      - const dbstring="mongodb://127.0.0.1:27017/"; have to be changed to match your atlas DB.
5. You should pretty much be good to go now - start your project by running "node index.js"
