//if when the app starts there is no data on the server, insert this dummy data
//note it's in the server folder so will only be created from there
if (Friends.find().count() === 0) {
  Friends.insert(
    { id: 1,
      firstName: 'Anna',
      lastName: 'Finlayson',
      photo: "img/person1.jpg",
      relationship: 'friend',
      gender: 'female',
      dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
        {label: 'birthday', date: '1989-10-24'},
        {label: 'anniversary', date: '2013-11-04'}],
      cards: ["../client/img/card1.jpg","../client/img/card2.jpg","../client/img/card3.jpg", "../client/img/card4.jpg"]
    });

    Friends.insert(
    { id: 2,
      firstName:'Tyler',
      lastName: 'Durden',
      photo: "img/person2.jpg",
      relationship: 'brother',
      gender: 'male',
      dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
        {label: 'birthday', date: '1978-03-21'} ],
      cards: ["../client/img/card1.jpg","../client/img/card3.jpg"]
    });

    Friends.insert(
    { id: 3,
      firstName:'Sammy',
      lastName: 'NewName',
      photo: "img/person3.jpg",
      relationship: 'strangerdanger',
      gender: 'female',
      dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
        {label: 'women\'s day', date: '2014-03-08'},
        ],
      cards: []
    });
}
