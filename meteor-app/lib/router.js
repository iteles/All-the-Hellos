Router.configure(
  //defines a default layout template for all routes using the global (configure) router option
  {layoutTemplate: 'layout',
   loadingTemplate: 'loading',
  //having waitOn in the config means all this data will load once, when your app does
   waitOn: function(){
      return Meteor.subscribe('friends'); }
  }
);

Router.route('/',
  //because a layout template is defined in the router configuration above,
  //this will load the home template *within* the layout template, in place of {{> yield}}
  {name: 'home'}
);

Router.route('/view-profile/:_id',
  {name: 'viewProfile',
    //fetches only the relevant cards only when view-profile route is hit
    //ZZZ - not sure this is the most efficient thing to do given the repetition of subscribing in the cards view as well as the friends view...
    waitOn: function() {Meteor.subscribe('cardsByFriend', this.params._id);},
    //provides the data context for this route - i.e. the specific friend requested in the _id
    data: function() {return Friends.findOne({_id: this.params._id});}
  }
);

Router.route('/view-card/:_id',
  {name: 'viewCard',
  waitOn: function() {Meteor.subscribe('cardsById', this.params._id);},
  data: function(){return Cards.findOne({_id: this.params._id});}
  }
);
