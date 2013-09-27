Template.entryPage.helpers({
  currentEntry: function() {
    return Entries.findOne(Session.get('currentEntryId'));
  },
  comments: function() {
    return Comments.find({entryId: this._id});
  }
});