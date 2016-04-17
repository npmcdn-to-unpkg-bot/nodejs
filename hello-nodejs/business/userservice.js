/**
 * User Service Business layer
 **/

function UserService() {
	this.usersInMemoryList = [
  	{name: 'Portuga', email:'portuga@email.com'},
  	{name: 'Test', email:'test@email.com'}
  ];
};

UserService.prototype.getUsers = function() {
	return this.usersInMemoryList;
};

UserService.prototype.getByName = function(name) {
	for (var i = this.usersInMemoryList.length; i--;) {
		if (this.usersInMemoryList[i].name === name) {
			return this.usersInMemoryList[i];
		}
	}
	
	return null;
};

UserService.prototype.addUser = function(userData) {
	this.usersInMemoryList.push(userData);
};

UserService.prototype.editUser = function(name, userData) {
	for (var i = this.usersInMemoryList.length; i--;) {
		if (this.usersInMemoryList[i].name === name) {
			this.usersInMemoryList[i] = userData;
			return userData;
		}
	}
	
	return null;
};

UserService.prototype.removeUser = function(name) {
	for (var i = this.usersInMemoryList.length; i--;) {
		if (this.usersInMemoryList[i].name === name) {
			this.usersInMemoryList.splice(i, 1);
			break;
		}
	}
	
};

module.exports = UserService;






