Router.configure(
  //defines a default layout template for all routes using the global (configure) router option
  {layoutTemplate: 'layout',
   loadingTemplate: 'loading',
  //having waitOn in the config means all this data will load once, when your app does
   waitOn: function(){
      Meteor.subscribe('friends'); }
  }
);

Router.route('/',
  //because a layout template is defined in the router configuration above,
  //this will load the home template *within* the layout template, in place of {{> yield}}
  {name: 'home'}
);

Router.route('/view-profile/:_id',
  {name: 'viewProfile',

    data: function() {return Friends.findOne({_id: this.params._id});}
  }
);
