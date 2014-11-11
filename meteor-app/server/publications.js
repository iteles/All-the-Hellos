//Step 1 - for now, publishing everything for ease, will fix later
  Meteor.publish('friends', function(){
    return Friends.find();
  });
