Template.entriesList.helpers({
  entries: function() {
    return Entries.find({}, {sort: {lastName: 1}});
  }
});