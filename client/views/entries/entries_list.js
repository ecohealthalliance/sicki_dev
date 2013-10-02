Template.newEntries.helpers({
  options: function() {
    return {
      sort: {submitted: -1},
      handle: newEntriesHandle
    }
  }
});

Template.bestEntries.helpers({
  options: function() {
    return {
      sort: {votes: -1, submitted: -1},
      handle: topEntriesHandle
    }
  }
});


Template.entriesList.helpers({
  entries: function() {
    return Entries.find({}, {sort: this.sort, limit: this.handle.limit()});
  },

  entriesReady: function() {
    return this.handle.ready();
  },

  allEntriesLoaded: function() {
    return this.handle.ready() &&  
      Entries.find().count() < this.handle.loaded();
  }

});

Template.entriesList.events({
  'click .load-more': function(e) {
    e.preventDefault();
    this.handle.loadNextPage();
  }
});