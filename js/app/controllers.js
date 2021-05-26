var app = angular.module('myApp');

app.
    controller('indexController', function ($scope, UserService) {

        var init = function () {
            $scope.getAllUsers();

        }

        $scope.getAllUsers = function () {
            UserService.getAllUsers()
                .then(
                    function success(response) {
                        $scope.users = response.data;
                    },
                    function error(response) {
                        console.log('Error: users not found')
                    });
        }

        $scope.deleteUser = function (User) {
            UserService.deleteUser(User)
                .then(
                    function success(response) {
                        console.log('Success: user deleted')
                    },
                    function error(response) {
                        console.log('Error: user not deleted')
                    });
        }

        init();

    }).

    controller('userController', function ($scope, UserService, $location, $window, $routeParams) {

        $scope.edit = false;

        var userId = $routeParams.userId

        if (userId) {
            UserService.getUser(userId)
                .then(
                    function success(response) {
                        $scope.user = response.data;
                        $scope.edit = true;
                    },
                    function error(response) {
                        console.log('Error: user not found')
                    });

        }

        $scope.addUser = function (User) {
            UserService.addUser(User)
            .then(
                function success(response) {
                    $window.history.back();
                },
                function error(response) {
                    console.log('Error: user not add')
                });
        }

        $scope.updateUser = function (User) {
            UserService.updateUser(User)
            .then(
                function success(response) {
                    $window.history.back();
                },
                function error(response) {
                    console.log('Error: user not updated')
                });
        }

    });



