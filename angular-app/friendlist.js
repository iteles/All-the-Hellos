angular.module('allFriends', [])
  .factory('friendlist', [function(){
    var f = {
      friendlist: [
      {
        firstName: 'Anna',
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
        dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
          {label: 'birthday', date: '1978-03-21'} ],
        cards: ["img/card1.jpg","img/card3.jpg"]
      },
      { firstName:'Sammy',
        lastName: 'NoCards',
        photo: "img/person3.jpg",
        relationship: 'strangerdanger',
        gender: 'female',
        dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
          {label: 'women\'s day', date: '2014-03-08'},
          ],
        cards: []
      }
       ] //end of friendsdb
     }; //end of var f

     return f;

  }]);
