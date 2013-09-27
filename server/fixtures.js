// Fixture data 
if (Entries.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var nicoId = Meteor.users.insert({
    profile: { name: 'nicopresto' }
  });
  var nico = Meteor.users.findOne(nicoId);

  var amyId = Meteor.users.insert({
    profile: { name: 'aslagle' }
  });
  var amy = Meteor.users.findOne(amyId);

  var surveyOneId = Entries.insert({
    lastName: 'Martinez',
    firstName: 'Juan',
    location: 'San Lucas',
    description: 'Was surveyed with Gonzalez',
    userId: amy._id,
    author: amy.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });

  Comments.insert({
    entryId: surveyOneId,
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Amy: may I review?'
  });

  Comments.insert({
    entryId: surveyOneId,
    userId: amy._id,
    author: amy.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Nico: you sure can!'
  });

  Entries.insert({
    lastName: 'Gonzalez',
    firstName: 'Maria',
    location: 'Pana',
    description: 'Was surveyed with Martinez',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0
  });

  Entries.insert({
    lastName: 'Romero',
    firstName: 'Jose',
    location: 'Rio',
    description: 'Last person surveyed',
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0
  });
}