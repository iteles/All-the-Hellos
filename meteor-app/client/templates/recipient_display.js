Template.recipientDisplay.helpers({
  //'f' here is the data context passed in in the template in {{#each friend this}}
  //where this is the data context - in this case it's the friendId property of the card
  friend: function(f){
    var person= Friends.find({_id:f}).fetch();
    console.log(person);
    return person;
  }
});
