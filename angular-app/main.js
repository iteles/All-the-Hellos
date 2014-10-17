var appModule = angular.module('allTheHellos',['FriendsModule', 'ngRoute']);

appModule.config(function($routeProvider) {
  $routeProvider
  .when("/",
    { templateUrl: "home.html"})
  .when("/friend",
    { templateUrl: "view-profile.html"})
  .otherwise({ templateUrl: "404.html"});
});

appModule.controller("FriendListController",function($scope, Friendlist) {
    $scope.friends = Friendlist;
    //pulls the info for all friends
});

appModule.controller("FriendInfoController", function($scope, Friendlist) {
    //console.log('friendlist data: '+ Friendlist[1].lastName);
    // Friendlist.map(function(f){
    //   console.log(f.lastName);
    // })
    $scope.friend = Friendlist[0];
    //ZZZ - this controller needs to display the info for THE friend selected WITHOUT being hardcoded as it is now
});

appModule.controller("CardsDisplayController", function($scope, Friendlist){
    $scope.cards = Friendlist[0].cards;
      //this controller needs to display the info for THE friend selected WITHOUT being hardcoded as it is now
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
