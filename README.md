# nodejs
The home of my nodejs poc projects

--- 
* hello-nodejs
  - A simple REST application using **expressjs** and **mocha + chai** frameworks to help the unit tests creation.

  - To resolve the project dependencies, run ```npm install```.
  - ```npm test``` to run the unit tests.
  - ```npm start``` to start the API.

  - After the start command, an user REST service with a "in memory database" can be found at the port 3000:

  - The follow commands are available:
    - GET http://localhost:3000/users/ - to Get all users
    - POST http://localhost:3000/users/ with the content: {name: 'simple name', email: 'bla@email.com'} to create a user
    - PUT http://localhost:3000/users/:name to update an user
    - DELETE http://localhost:3000/users/:name to delete an user
