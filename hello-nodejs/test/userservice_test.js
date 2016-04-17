/**
 * Unit test to class UserService
 */

var assert = require('chai').assert;
var UserService = require('./../business/userservice.js');

/** Delegate all requests to a simple business layer **/
var userService = new UserService();

describe('UserService Unit Tests', function() {
	
	it('create a new user', function() {
		userService.addUser({name: 'Test', email: 'test@email.com'});
		var createdUser = userService.getByName('Test');
		
		assert.equal(createdUser.name, 'Test');
	});
	
	it('update Test user', function() {
		userService.addUser({name: 'Test', email: 'test@email.com'});
		var editdUser = userService.editUser('Test', {name: 'Test 2', email: 'test2@email.com'});
		
		assert.equal(editdUser.name, 'Test 2');
		assert.equal(editdUser.email, 'test2@email.com');
		
		editdUser = userService.editUser('Test 2', {name: 'Test', email: 'test@email.com'});
		
		assert.equal(editdUser.name, 'Test');
		assert.equal(editdUser.email, 'test@email.com');
	});
	
	it('get a user by name Test', function() {
		var testUser = userService.getByName('Test');
		assert.equal(testUser.name, 'Test');
	});
	
	it('Get all users', function() {
		var userList = userService.getUsers();
		var testUserCount = 0;
		
		for (var i = userList.length; i--;) {
			if (userList[i].name === 'Test') {
				testUserCount++;
				break;
			}
		}
		
		assert.isAbove(testUserCount, 0);
		
	});
	
	
});