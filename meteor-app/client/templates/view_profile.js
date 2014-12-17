//holds logic for view-profile template
Template.viewProfile.helpers({
  //this._id is the ID of the current frient profile being displayed
  cards: function(){
    var cards = Cards.find({friendId: this._id}).fetch();
    if(cards.length > 1) {
      return cards;
    } else {
      //ensures empty card array isn't created - spacebars #if relies on this too
      return false;
    }
  },

  profileMessage: function(){
    var message;

    if (Cards.find({friendId: this._id}).count() > 0){
      message = "Yay! You\'re a great friend!";
    }
    else{
      message = "No cards yet!";
    }

    return message;
  }

});
