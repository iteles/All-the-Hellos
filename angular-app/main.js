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
    //TBD
});


//********* DATA for now in lieu of a database ***************
var friendsdb = [
  { firstName:'Anna',
    lastName: 'Finlayson',
    photo: "img/person1.jpg",
    relationship: 'friend',
    gender: 'female',
    birthday: '24-October-1989',
    anniversary: '4-November-2013',
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
