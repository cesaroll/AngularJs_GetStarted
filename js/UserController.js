// CONTROLLER - UserController

(function () {
  
  "use strict"; 
  
  
  
  function UserController($scope, gitHub, $routeParams, $location) { //Controller
    
    /* ****************************************************** */
    /*                 User related functions                 */
    /* ****************************************************** */
    
    var onRepos = function (data) {
      $scope.user.repos = data;
    };
    
    var onError = function (reason) {
      $scope.error = "Could not fetch data. Error: " + reason.data.message;
      $scope.user = {};
    };
    
    var onUserComplete = function (data) {
      $scope.user = data;
    
      if ($scope.user.name) {
        gitHub.getRepos($scope.user)
              .then(onRepos, onError);
      } else {
        $scope.user = {};
        $scope.error = "Invalid User Data";
      }       
      
    };
    
    /* ****************************************************** */
    /*                 Sort functions                         */
    /* ****************************************************** */
    
    $scope.changeRepoSortOrder = function (orderBy) {
      $scope.repoSortOrder = changeSortOrder($scope.repoSortOrder, orderBy);
    };
      
    
    /* ****************************************************** */
    /*                  Contributors                          */
    /* ****************************************************** */
    
    $scope.getContributors = function (repoName) {
      if (repoName)
        $location.path("/repo/contributors/" + $scope.searchName + "/" + repoName);
    };
    
    /* ****************************************************** */
    /*                  Initializations                       */
    /* ****************************************************** */
    
    $scope.repoSortOrder = "-stargazers_count";
    $scope.searchName = $routeParams.username;
    $scope.selfPath = location.hash;
    
    //Getting user
    gitHub.getUser($scope.searchName)
          .then(onUserComplete, onerror);
    
  }
  
  
  // Create Controller in MainApp
  angular.module("MainApp")
    .controller("UserController", ["$scope", "gitHub", "$routeParams", "$location", UserController]);
  
})();