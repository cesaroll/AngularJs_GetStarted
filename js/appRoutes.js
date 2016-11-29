// ROUTES
(function () {
  "use strict";
  angular.module("MainApp").config(["$routeProvider", function ($routeProvider) {
    
    $routeProvider
      
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
    
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })
      
      .when("/repo/contributors/:username/:reponame", {
        templateUrl: "contributors.html",
        controller: "ContributorsController"
      })
    
      .otherwise({
        redirectTo: "/main"
      });
    
    }]);
})();