Notifications = new Meteor.Collection('notifications');

Notifications.allow({
  update: ownsDocument
});

createCommentNotification = function(comment) {
  var entry = Entries.findOne(comment.entryId);
  if (comment.userId !== entry.userId) {
    Notifications.insert({
      userId: entry.userId,
      eventId: entry._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};