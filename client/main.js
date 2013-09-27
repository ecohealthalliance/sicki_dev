Meteor.subscribe('entries');
Deps.autorun(function() {
  Meteor.subscribe('comments', Session.get('currentEntryId'));
});