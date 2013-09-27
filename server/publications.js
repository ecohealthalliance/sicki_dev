Meteor.publish('entries', function() {
  return Entries.find();
});

Meteor.publish('comments', function(entryId) {
  return Comments.find({entryId: entryId});
});