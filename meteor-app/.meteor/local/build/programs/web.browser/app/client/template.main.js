(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div id="mainpage">\n    <!--This is where templates will go-->\n  </div>\n<!-- ZZZ | Maybe move these into a template of their own? -->\n    <section id="nav">\n      <p> Sign in </p>\n      <p> Add friend </p>\n    </section>');
}));
Meteor.startup(Template.body.renderToDocument);

})();
