var appModule = angular.module('allTheHellos',[]);

appModule.controller("FriendListController",function($scope) {
    $scope.friends = friendsdb;
    //pulls the info for all friends
});

appModule.controller("FriendInfoController",function($scope) {
    $scope.friend = friendsdb[0];
    //ZZZ - this controller needs to display the info for THE friend selected WITHOUT being hardcoded as it is now
});

appModule.controller("CardsDisplayController", function($scope){
    $scope.cards = friendsdb[0].cards;
      //this controller needs to display the info for THE friend selected WITHOUT being hardcoded as it is now
});

appModule.controller('ProfileMessageController', function($scope){
    // if(friendsdb[0].cards.length()<1){
    //   $scope.profile.Message = 'Yay!';
    // }
    // else{
    //   $scope.profileMessage = 'No cards yet!';
    // }
});

appModule.controller('ImportantDatesController', function($scope){
    $scope.dates = friendsdb[0].dates;
      //this controller needs to display the info for THE friend selected WITHOUT being hardcoded as it is now

      //ZZZ - Custom capitalization filter to review: http://puigcerber.com/2014/05/06/angularjs-capitalize-filter/
});


//********* DATA for now in lieu of a database ***************
var friendsdb = [
  { firstName:'Anna',
    lastName: 'Finlayson',
    photo: "img/person1.jpg",
    relationship: 'friend',
    gender: 'female',
    dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
      {label: 'birthday', date: '1989-10-24'},
      {label: 'anniversary', date: '2013-11-04'}],
    cards: ["img/card1.jpg","img/card2.jpg","img/card3.jpg", "img/card4.jpg"]
  },
  { firstName:'Tyler',
    lastName: 'Durden',
    photo: "img/person2.jpg",
    relationship: 'brother',
    gender: 'male',
    birthday: '21-March-1978',
    cards: ["img/card1.jpg","img/card3.jpg"]
  }
];
