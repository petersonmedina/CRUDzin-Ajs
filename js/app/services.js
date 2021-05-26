app.service('UserService', ['$http', function ($http) {

    var baseURL = 'http://localhost:3001/users/';

    this.getAllUsers = function getAllUsers() {
        return $http({
            method: 'GET',
            url: baseURL
        });
    }

    this.getUser = function getUser(UserId){
        return $http({
            method: 'GET',
            url: baseURL + UserId
        })
    }

    this.addUser = function addUser(User) {
        return $http({
            method: 'POST',
            url: baseURL,
            data: User
        })
    }

    this.updateUser = function updateUser(User) {
        return $http({
            method: 'PUT',
            url: baseURL + User.id,
            data: {name: User.name, email: User.email}
        })
    }

    this.deleteUser = function deleteUser(User) {
        return $http({
            method: 'DELETE',
            url: baseURL + User.id
        })
    }

}]);