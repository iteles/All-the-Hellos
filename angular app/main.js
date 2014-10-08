var appModule = angular.module('allTheHellos',[]);

appModule.controller("FriendListController",function($scope) {
    $scope.friends = friendsdb;
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
    cards: ['/img/card1.jpg', '/img/card2.jpg', '/img/card3.jpg', '/img/card4.jpg' ] //not sure if this is the right was to add this data!
  },
  { firstName:'Tyler',
    lastName: 'Durden',
    photo: "img/person2.jpg",
    relationship: 'brother',
    gender: 'male',
    birthday: '21-March-1978',
    cards: ['/img/card1.jpg', '/img/card3.jpg']
  }
];
