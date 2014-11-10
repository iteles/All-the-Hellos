//ZZZ-temporary friends variable to set up initial template

var friendsData = [
  { id: 1,
    firstName: 'Anna',
    lastName: 'Finlayson',
    photo: "./img/person1.jpg",
    relationship: 'friend',
    gender: 'female',
    dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
      {label: 'birthday', date: '1989-10-24'},
      {label: 'anniversary', date: '2013-11-04'}],
    cards: ["../img/card1.jpg","../img/card2.jpg","../client/img/card3.jpg", "../client/img/card4.jpg"]
  },

  { id: 2,
    firstName:'Tyler',
    lastName: 'Durden',
    photo: "img/person2.jpg",
    relationship: 'brother',
    gender: 'male',
    dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
      {label: 'birthday', date: '1978-03-21'} ],
    cards: ["../client/img/card1.jpg","../client/img/card3.jpg"]
  }];


Template.firstTemplate.helpers({
  friends: friendsData
});
