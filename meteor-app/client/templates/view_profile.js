//holds logic for view-profile template
Template.viewProfile.helpers({
  //this._id is the ID of the current frient profile being displayed
  cards: function(){
     return Cards.find({friendId: this._id});
  }


});
