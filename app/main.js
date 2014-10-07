var appModule = angular.module("allTheHellos",[]);

appModule.controller("FriendListController",function($scope) {
  $scope.friends = friends;
});



//********* DATA for now in lieu of a database ***************
var friends = [
  { firstName:'Anna',
    lastName: 'Finlayson',
    photo: "public/img/person1.jpg",
    relationship: 'friend',
    gender: 'female',
    birthday: '24-October-1989',
    anniversary: '4-November-2013',
    cards: ['public/img/card1.jpg', 'public/img/card2.jpg', 'public/img/card3.jpg', 'public/img/card4.jpg' ] //not sure if this is the right was to add this data!
  },
  { firstName:'Tyler',
    lastName: 'Durden',
    photo: "public/img/person2.jpg",
    relationship: 'brother',
    gender: 'male',
    birthday: '21-March-1978',
    cards: ['public/img/card1.jpg', 'public/img/card3.jpg']
  }
];
