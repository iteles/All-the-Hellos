var Lab = require('lab');

var server = require('../index.js');

Lab.experiment("viewProfile", function(){
  //tests go here
  lab.test("User details display correctly in View Profile", function(done){
    var options = {
      method: 'GET',
      url: '/AnnaFinlayson'
    };

    server.inject(options, function(response){
      var result = response.result;

      Lab.expect(response.statusCode).to.equal(200);
      Lab.expect(result.firstName).to.equal('Anna');
      Lab.expect(result.lastName).to.equal('Finlayson');
      Lab.expect(result.relationship).to.equal('friend');
      Lab.expect(result.gender).to.equal('female');
      Lab.expect(result.birthday).to.equal('24-October-1989');
      Lab.expect(result.anniversary).to.equal('4-November-2013');
      Lab.expect(result.cards).to.be.instanceof(Array);
      Lab.expect(result.cards).to.have.length(4);
    });
  });

});

// firstName:'Anna',
//   lastName: 'Finlayson',
//   photo: "./img/person1.jpg",
//   relationship: 'friend',
//   gender: 'female',
//   birthday: '24-October-1989',
//   anniversary: '4-November-2013',
//   cards: ['./img/card1.jpg', './img/card2.jpg', './img/card3.jpg', './img/card4.jpg' ]
