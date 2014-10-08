var appModule = angular.module('allTheHellos',[]);

appModule.controller("FriendListController",function($scope) {
    $scope.friends = friendsdb;
    //pulls the info for all friends
});

appModule.controller("FriendInfoController",function($scope) {
    $scope.friend = friendsdb[0];
    //this controller needs to display the info for ONE friend WITHOUT being hardcoded as it is now
});

appModule.controller("CardsDisplayController", function($scope){
    $scope.cards = friendsdb[0].cards;
      //this controller needs to display the info for ONE friend WITHOUT being hardcoded as it is now
});

appModule.controller('ProfileMessageController', function($scope){
    //TBD
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
    cards: [{cardURL:'img/card1.jpg'},{cardURL:'img/card2.jpg'},{cardURL:'img/card3.jpg'},{cardURL:'img/card4.jpg'}, ] //not sure if this is the right was to add this data!
  },
  { firstName:'Tyler',
    lastName: 'Durden',
    photo: "img/person2.jpg",
    relationship: 'brother',
    gender: 'male',
    birthday: '21-March-1978',
    cards: [{cardURL:'img/card1.jpg'},{cardURL:'img/card3.jpg'},]
  }
];
