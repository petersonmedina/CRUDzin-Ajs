var app = angular.module("myApp", ["ngRoute", "ngResource"]);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
        .when("/", { templateUrl: "templates/home.html", controller: "indexController" })
        .when("/user/add", { templateUrl: "templates/user.html", controller: 'userController' })
        .when('/user/edit/:userId', { templateUrl: 'templates/user.html', controller: 'userController' })
        .otherwise({ redirectTo: '/' })

});