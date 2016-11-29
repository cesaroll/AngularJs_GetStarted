// SERVICE - gitHub

(function () {
  
  "use strict";
  
  angular.module("MainApp")
    .service("gitHub", ["$http", gitHub]);
    
  function gitHub($http) {
    
    var getUser = function (userName) {
      
      return $http.get("https://api.github.com/users/" + userName)
                  .then(function(response){
                    return response.data;
                  });
    };
    
    var getRepos = function (user) {
      return $http.get(user.repos_url)
                  .then(function (response){
                    return response.data;
                  });
    };
    
    var getContributors = function (userName, repoName) {
      return $http.get("https://api.github.com/repos/" + userName + "/" + repoName + "/contributors")
                  .then(function (response) {
                    return response.data;
                  });
    };
    
    return {
      getUser: getUser,
      getRepos: getRepos,
      getContributors: getContributors
    };
    
  }
  
})();