newEntriesHandle = Meteor.subscribeWithPagination('newEntries', 3);
topEntriesHandle = Meteor.subscribeWithPagination('topEntries', 3);

/*entriesHandle = Meteor.subscribeWithPagination('newEntries', 3);*/
Meteor.autorun(function() {
  Meteor.subscribe('singleEntry', Session.get('currentEntryId'));
  Meteor.subscribe('comments', Session.get('currentEntryId'));
})

Meteor.subscribe('notifications');