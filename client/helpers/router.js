Meteor.Router.add({
  '/': {to: 'newEntries', as: 'home'},
  '/best': 'bestEntries',
  '/new': 'newEntries',
  
  '/entries/:_id': {
    to: 'entryPage', 
    and: function(id) { Session.set('currentEntryId', id); }
  },
  
  '/entries/:_id/edit': {
    to: 'entryEdit', 
    and: function(id) { Session.set('currentEntryId', id); }    
  },
  
  '/submit': 'entrySubmit'
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  },
  'clearErrors': function(page) {
    Errors.clearSeen();
    return page;
  }
});

Meteor.Router.filter('requireLogin', {only: 'entrySubmit'});
Meteor.Router.filter('clearErrors');
