Template.entryEdit.helpers({
  entry: function() {
    return Entries.findOne(Session.get('currentEntryId'));
  }
});

Template.entryEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentEntryId = Session.get('currentEntryId');

    var entryProperties = {
      lastName: $(e.target).find('[name=lastName]').val(),
      firstName: $(e.target).find('[name=firstName]').val(),
      location: $(e.target).find('[name=location]').val()
    }

    Entries.update(currentEntryId, {$set: entryProperties}, function(error) {
      if (error) {
        // display the error to the user
        Errors.throw(error.reason);
      } else {
        Meteor.Router.to('entryPage', currentEntryId);
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this entry?")) {
      var currentEntryId = Session.get('currentEntryId');
      Entries.remove(currentEntryId);
      Meteor.Router.to('entriesList');
    }
  }
});