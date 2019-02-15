"use strict"
angular
    .module("ProfileApp")
    // config takes an array as an argument, "routeProvider" as a string and inside function
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
        .when("/profile", {
            template: "<profile></profile>"
        })
        .when("/editprofile", {
            template: "<editprofile></editprofile>"
        })
        .otherwise({ redirectTo: "/profile"})

    }]);