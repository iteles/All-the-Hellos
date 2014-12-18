Template.viewCard.helpers({
  friend: function(friendId){
    var person= Friends.find(friendId).fetch();
    console.log(person);
    return person;
  }
});
