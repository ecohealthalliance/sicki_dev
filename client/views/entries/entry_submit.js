Template.entrySubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var entry = {
      lastName: $(event.target).find('[name=lastName]').val(),
      firstName: $(event.target).find('[name=firstName]').val(),
      location: $(event.target).find('[name=location]').val(),
      description: $(event.target).find('[name=description]').val()
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