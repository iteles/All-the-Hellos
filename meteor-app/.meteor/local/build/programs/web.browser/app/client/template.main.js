(function(){
Template.body.addContent((function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("firstTemplate"));
}));
Meteor.startup(Template.body.renderToDocument);

})();
