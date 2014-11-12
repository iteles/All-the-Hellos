//holds logic for view-profile template
Template.viewProfile.helpers({
  friend: function(){
    return Friends.find();
  }
});
