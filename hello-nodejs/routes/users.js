var express = require('express');
var router = express.Router();
var UserService = require('./../business/userservice.js');

/** Delegate all requests to a simple business layer **/
var userService = new UserService();

/** get all users **/
router.get('/', function(req, res, next) {
	res.json(userService.getUsers());
});

/** add new user  **/
router.post('/', function(req, res, next) {
	console.log('ohhh, create a new user using expressjs rest api :)');
	userService.addUser(req.body);
	res.json(req.body); 
});


/** update user info giving your name **/
router.put('/:name', function(req, res, next) {
	console.log('uau, updating user by name: ' + req.params.name);
	userService.editUser(req.params.name, req.body);
	res.json(req.body);
});

/** delete a user from name **/
router.delete('/:name', function(req, res, next) {
	console.log('hunnn, delete a user by name: ' + req.params.name);
	userService.removeUser(req.params.name);
	res.json(userService.getUsers());
});

module.exports = router;
