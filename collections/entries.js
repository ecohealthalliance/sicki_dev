Entries = new Meteor.Collection('entries');

Entries.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Entries.deny({
  update: function(userId, entry, fieldNames) {
    // may only edit the following three fields:
    return (_.without(fieldNames, 'eventName', 'disease', 'zoonoticType').length > 0);
  }
});

Meteor.methods({
  entry: function(entryAttributes) {
    var user = Meteor.user(),
      entryWithSameEventName = Entries.findOne({eventName: entryAttributes.eventName});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to add new entries");

    // ensure the entry has a title
    if (!entryAttributes.eventName)
      throw new Meteor.Error(422, 'Please fill in an event name');

    // check that there are no previous entries with the same last name
    if (entryAttributes.eventName && entryWithSameEventName) {
      throw new Meteor.Error(302, 
        'This event name has already been entered', 
        entryWithSameEventName._id);
    }

    // pick out the whitelisted keys
    var entry = _.extend(_.pick(entryAttributes, 'eventName', 'disease', 'zoonoticType'), {
      userId: user._id, 
      author: user.username, 
      submitted: new Date().getTime(),
      commentsCount: 0
    });

    var entryId = Entries.insert(entry);

    return entryId;
  }
});