//holds the logic for the home template
Template.home.helpers({
  friendlist: function(){
    return Friends.find();
  }
});
