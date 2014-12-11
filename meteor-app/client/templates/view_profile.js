//holds logic for view-profile template
Template.viewProfile.helpers({
  //this._id is the ID of the current frient profile being displayed
  cards: function(){
     return Cards.find({friendId: this._id});
  },

  profileMessage: function(){
    var message;
    if (cards){
      message = "Yay! You\'re a great friend!";
    }
    else{
      message = "No cards yet!";
    }

    console.log(message);
    return message;
  }

});
