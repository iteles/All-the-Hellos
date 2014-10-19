var mainConfigModule = angular.module('allTheHellosConfig', ['ngRoute']);

mainConfigModule.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/",{
      templateUrl: 'home.html'
    })
    .when('/view-profile/:id',{
      controller: 'FriendInfoController',
      templateUrl: 'view-profile.html'
    })
    .otherwise({
      templateUrl: "404.html"
    });

  $locationProvider.html5Mode(true);
}]);
