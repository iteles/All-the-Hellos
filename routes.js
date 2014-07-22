var Hapi = require('hapi');
var Joi = require('joi'); //remove if I end up not doing any validation here

//********* Routes to be exported by the module *********

module.exports = [
  { path: '/friends/{id}',
    method: 'GET',
    config: {
      handler: viewFriendProfile,
      // view: "template-friend-profile.html"
    }
  }
];


//********* FUNCTIONS that are be used as the handlers in the routes above *********
function viewFriendProfile(request, reply){
//   var name = request.params.friendName.split('/');
//   reply("Hello "+ name[0]);

    var id = request.params.id;

        if (friends.length <= id) {
          return request.reply('No friend found, please try a different ID.').code(404);
        }

        reply(friends[id]);
        console.log('got here');
        //this line of code below does nothing yet!
        reply.view('template-friend-profile.html');
  }



//********* DATA for now in lieu of a database ***************
var friends = [
  { firstName:'Anna',
    lastName: 'Finlayson',
    photo: "./img/person1.jpg",
    relationship: 'friend',
    gender: 'female',
    birthday: '24-October-1989',
    anniversary: '4-November-2013',
    cards: ['./img/card1.jpg', './img/card2.jpg', './img/card3.jpg', './img/card4.jpg' ] //not sure if this is the right was to add this data!
  },
  { firstName:'Tyler',
    lastName: 'Durden',
    photo: "./img/person2.jpg",
    relationship: 'brother',
    gender: 'male',
    birthday: '21-March-1978',
    cards: ['./img/card1.jpg', './img/card3.jpg']
  }
];
