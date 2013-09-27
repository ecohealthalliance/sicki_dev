Entries = new Meteor.Collection('entries');

Entries.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Entries.deny({
  update: function(userId, entry, fieldNames) {
    // may only edit the following three fields:
    return (_.without(fieldNames, 'lastName', 'firstName', 'location').length > 0);
  }
});

Meteor.methods({
  entry: function(entryAttributes) {
    var user = Meteor.user(),
      entryWithSameLastName = Entries.findOne({lastName: entryAttributes.lastName});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to add new entries");

    // ensure the entry has a title
    if (!entryAttributes.lastName)
      throw new Meteor.Error(422, 'Please fill in a last name');

    // check that there are no previous entries with the same last name
    if (entryAttributes.lastName && entryWithSameLastName) {
      throw new Meteor.Error(302, 
        'This last name has already been entered', 
        entryWithSameLastName._id);
    }

    // pick out the whitelisted keys
    var entry = _.extend(_.pick(entryAttributes, 'lastName', 'firstName', 'location', 'description'), {
      userId: user._id, 
      author: user.username, 
      submitted: new Date().getTime(),
      commentsCount: 0
    });

    var entryId = Entries.insert(entry);

    return entryId;
  }
});