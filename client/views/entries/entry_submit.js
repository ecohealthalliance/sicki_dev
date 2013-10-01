Template.entrySubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var entry = {
      eventName: $(event.target).find('[name=eventName]').val(),
      refEventName: $(event.target).find('[name=refEventName]').val(),
      disease: $(event.target).find('[name=disease]').val(),
      refDisease: $(event.target).find('[name=refDisease]').val(),
      zoonoticType: $(event.target).find('[name=zoonoticType]').val(),
      refZoonoticType: $(event.target).find('[name=refZoonoticType]').val()
    }
    Meteor.call('entry', entry, function(error, id) {
      if (error) {
        // display the error to the user
        Errors.throw(error.reason);
        // if the error is that the entry already exists, take us there
        if (error.error === 302)
          Meteor.Router.to('entryPage', error.details)
      } else {
        Meteor.Router.to('entryPage', id);
      }
    });
  }
});