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
      eventName: $(event.target).find('[name=eventName]').val(),
      refEventName: $(event.target).find('[name=refEventName]').val(),
      disease: $(event.target).find('[name=disease]').val(),
      refDisease: $(event.target).find('[name=refDisease]').val(),
      zoonoticType: $(event.target).find('[name=zoonoticType]').val(),
      refZoonoticType: $(event.target).find('[name=refZoonoticType]').val()
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