var appModule = angular.module('allTheHellos',['FriendsModule', 'ngRoute']);

appModule.config([ '$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/",
    { templateUrl: 'home.html'})
  .when('/view-profile/:id',
    { controller: 'FriendInfoController',
    templateUrl: 'view-profile.html'})
  .otherwise({ templateUrl: "404.html"});
}]);

appModule.controller("FriendListController",function($scope, Friendlist) {
    $scope.friends = Friendlist;
    //pulls the info for all friends
});

appModule.controller("FriendInfoController", function($scope, Friendlist, $routeParams) {
    //console.log('$routeParams is: '+ $routeParams.id);
    $scope.friend = Friendlist[$routeParams.id - 1];
    //ZZZ - this array ID is precarious, what if the person's id is 64 but they're in the array at position 30 for some reason?
});

appModule.controller('ProfileMessageController', function($scope, Friendlist){
  //this controller needs to display the info for THE friend selected WITHOUT being hardcoded as it is now
    if(Friendlist[0].cards.length){
      $scope.profileMessage = 'Yay! You\'re a great friend';
    }
    else{
      $scope.profileMessage = 'No cards yet!';
    }
});

appModule.controller('ImportantDatesController', function($scope, Friendlist){
    $scope.dates = Friendlist[0].dates;
      //this controller needs to display the info for THE friend selected WITHOUT being hardcoded as it is now

      //ZZZ - Custom capitalization filter to review: http://puigcerber.com/2014/05/06/angularjs-capitalize-filter/
});
