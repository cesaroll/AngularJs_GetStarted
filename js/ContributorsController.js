// CONTROLLER - ContributorsController.js

(function () {
  "use strict";
  
  
  
  function ContributorsController($scope, gitHub, $routeParams, $location) {
    
    var onSuccess = function (data) {
      $scope.contributors = data;
      
    };
    
    var onError = function (reason) {
      $scope.error = "Could not fetch data. Error: " + reason.data.message;
    };
    
    var init = function () {
      $scope.userName = null;
      $scope.repoName = null;
      $scope.contributors = {};
      $scope.error = null;

      //Get Contributors
      if ($routeParams.username && $routeParams.reponame) {

        $scope.userName = $routeParams.username;
        $scope.repoName = $routeParams.reponame;

        gitHub.getContributors($scope.userName, $scope.repoName)
            .then(onSuccess, onError);

      }
    };
    
    init();
    
    
  }
  
  //Add Controller to Main App
  angular.module("MainApp")
          .controller("ContributorsController", ["$scope", "gitHub", "$routeParams", "$location", ContributorsController]);
  
})();