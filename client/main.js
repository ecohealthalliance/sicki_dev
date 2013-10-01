entriesHandle = Meteor.subscribeWithPagination('newEntries', 3);
Deps.autorun(function() {
  Meteor.subscribe('singleEntry', Session.get('currentEntryId'));
  Meteor.subscribe('comments', Session.get('currentEntryId'));
})
Meteor.subscribe('notifications');