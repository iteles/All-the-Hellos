//if when the app starts there is no data on the server, insert this dummy data
//note it's in the server folder so will only be created from there

if (Friends.find().count() === 0) {

  var annaId = Friends.insert(
    { firstName: 'Anna',
      lastName: 'Finlayson',
      photo: "./img/person1.jpg",
      relationship: 'friend',
      gender: 'female',
      dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
        {label: 'birthday', date: '1989-10-24'},
        {label: 'anniversary', date: '2013-11-04'}],
      cards: [{cardId: 'card1'}, {cardId: 'card3'}, {cardId: 'card4'}]
    });

    var tylerId = Friends.insert(
    { firstName:'Tyler',
      lastName: 'Durden',
      photo: "./img/person2.jpg",
      relationship: 'brother',
      gender: 'male',
      dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
        {label: 'birthday', date: '1978-03-21'} ],
      cards: [{cardId: 'card1'}, {cardId: 'card2'}, {cardId: 'card3'}]
    });

    var sammyId = Friends.insert(
    { firstName:'Sammy',
      lastName: 'NewName',
      photo: "./img/person3.jpg",
      relationship: 'strangerdanger',
      gender: 'female',
      dates: [ //ISO 8601 datetime string formats - lots of validation will be required here
        {label: 'women\'s day', date: '2014-03-08'},
        ],
      cards: []
    });

    var card1 = Cards.insert({
      friendId:[{recipient:annaId, date: '2014-10-24'},{recipient: tylerId, date: '2010-03-21'}],
      url: './img/card1.jpg',
    });

    var card2 = Cards.insert({
      friendId:[{recipient: tylerId, date: '2011-03-21'}],
      url: './img/card2.jpg'
    });

    var card3 = Cards.insert({
      friendId:[{recipient:annaId, date: '2013-10-24'},{recipient: tylerId, date: '2012-03-21'}],
      url: './img/card3.jpg'
    });

    var card4 = Cards.insert({
      friendId:[{recipient:annaId, date: '2012-10-24'}],
      url: './img/card4.jpg'
    });
}
