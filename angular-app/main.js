var appModule = angular.module('allTheHellos',['FriendsModule']);

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


//********* DATA for now in lieu of a database ***************
// var friendsdb = [
// {
//   firstName: 'Anna',
//   lastName: 'Finlayson',
//   photo: "img/person1.jpg",
//   relationship: 'friend',
//   gender: 'female',
//   dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
//     {label: 'birthday', date: '1989-10-24'},
//     {label: 'anniversary', date: '2013-11-04'}],
//   cards: ["img/card1.jpg","img/card2.jpg","img/card3.jpg", "img/card4.jpg"]
// },
// { firstName:'Tyler',
//   lastName: 'Durden',
//   photo: "img/person2.jpg",
//   relationship: 'brother',
//   gender: 'male',
//   dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
//     {label: 'birthday', date: '1978-03-21'} ],
//   cards: ["img/card1.jpg","img/card3.jpg"]
// },
// { firstName:'Sammy',
//   lastName: 'NoCards',
//   photo: "img/person3.jpg",
//   relationship: 'strangerdanger',
//   gender: 'female',
//   dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
//     {label: 'women\'s day', date: '2014-03-08'},
//     ],
//   cards: []
// }
//  ];
