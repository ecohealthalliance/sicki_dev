Meteor.publish('entries', function(limit) {
  return Entries.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('comments', function(entryId) {
  return Comments.find({entryId: entryId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});

Meteor.publish('newEntries', function(limit) {
  return Entries.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('singleEntry', function(id) {
  return id && Entries.find(id);
});