Template.entriesList.helpers({
  entries: function() {
    return Entries.find({}, {sort: {eventName: 1}, limit: entriesHandle.limit()})
  },

  entriesReady: function() {
    return ! entriesHandle.loading();
  },
  allEntriesLoaded: function() {
    return ! entriesHandle.loading() && 
      Entries.find().count() < entriesHandle.loaded();
  }
});

Template.entriesList.events({
  'click .load-more': function(e) {
    e.preventDefault();
    entriesHandle.loadNextPage();
  }
});