// CONTROLLER : MainController

(function() {
  
  "use strict";
  
  
  // Create MainController in MainApp
  angular.module("MainApp")
    .controller("MainController", ["$scope", "$interval", "$location", MainController]);
  
  function MainController($scope, $interval, $location) { //Controller
    
    /* ****************************************************** */
    /*                 Search for user                        */
    /* ****************************************************** */
    
    $scope.search = function(userName){
      $scope.error = "";
      $scope.user = {};
            
      //Cancel interval
      if(countDownInterval) {
        $interval.cancel(countDownInterval);
        $scope.countdown = null;
      }
      
      $location.path("/user/" + userName);
        
    };
        
  
    /* ****************************************************** */
    /*                 CountDown                              */
    /* ****************************************************** */
  
    var decrementCountDown = function () {
      $scope.countdown -= 1;
      if($scope.countdown < 1) {
        $scope.searchName = $scope.searchName? $scope.searchName : "angular";
        $scope.search($scope.searchName);
      }
    };
    
    var countDownInterval = null; // used to cancell interval is search is already executed
    var startCountDown = function() {
      countDownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
    };
    
    /* ****************************************************** */
    /*                  Initializations                       */
    /* ****************************************************** */
      
    
    $scope.countdown = 5;
    $scope.searchName = "angular";
    
    startCountDown();
    
  }
  
})();