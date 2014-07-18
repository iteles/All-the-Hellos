var Hapi = require('hapi');
var Joi = require('joi'); //remove if I end up not doing any validation here

//********* Routes to be exported by the module *********

module.exports = [
  { path: '/{friendName}',
    method: 'GET',
    // config: {
      handler: viewFriendProfile,
      // view: "template-friend-profile.html"
    // }
  }
];


//********* FUNCTIONS that are be used as the handlers in the routes above *********
function viewFriendProfile(request,reply){
  var name = request.params.friendName.split('/');
  reply("Hello "+ name[0]);
}
