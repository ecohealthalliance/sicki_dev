// Fixture data 
if (Entries.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var nicoId = Meteor.users.insert({
    profile: { name: 'nicopresto' }
  });
  var nico = Meteor.users.findOne(nicoId);

  var carlaId = Meteor.users.insert({
    profile: { name: 'ctilchin' }
  });
  var carla = Meteor.users.findOne(carlaId);

  var alexaId = Meteor.users.insert({
    profile: { name: 'afrank' }
  });
  var alexa = Meteor.users.findOne(alexaId);

  var alexId = Meteor.users.insert({
    profile: { name: 'ademarsh' }
  });
  var alex = Meteor.users.findOne(alexId);

  var elizabethId = Meteor.users.insert({
    profile: { name: 'eeckel' }
  });
  var elizabeth = Meteor.users.findOne(elizabethId);

  var surveyOneId = Entries.insert({
    eventName: 'Acinetobacter baumannii gentamycin-res (Australia, 1993)',
    refEventName: 'Jones et al. SI',
    disease: 'none reported, but likely nosocomial',
    refDisease: '75',
    zoonoticType: 'non-zoonotic',
    refZoonoticType: '459',
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0
  });


  Comments.insert({
    entryId: surveyOneId,
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Carla: are we sure this is nosocomial'
  });

  Comments.insert({
    entryId: surveyOneId,
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Nico: Australia 1993 reports nosocomial infection, not specified but likely septicaemia, endocarditis, meningitis, pneumonia, skin and wound sepsis (or) urinary tract infection'
  });

  Entries.insert({
    eventName: 'Bartonella elizabethae (Massachusetts, 1986)',
    refEventName: 'Jones et al. SI',
    disease: 'Endocarditis ',
    refDisease: '149 ',
    zoonoticType: 'zoonotic-wildlife',
    refZoonoticType: '459',
    userId: alexa._id,
    author: alexa.profile.name,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Entries.insert({
    eventName: 'Chikungunya virus (West Kalimantan/Sumatra/Java Indonesia, 1982)',
    refEventName: 'Jones et al. SI',
    disease: 'Chikungunya fever',
    refDisease: '238, 336, 360, 609',
    zoonoticType: 'zoonotic-wildlife',
    refZoonoticType: '360',
    userId: alex._id,
    author: alex.profile.name,
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Entries.insert({
    eventName: 'Ebola virus (Sudan, 1976)',
    refEventName: 'Jones et al. SI',
    disease: 'Haemorrhagic fever',
    refDisease: '8',
    zoonoticType: 'zoonotic-unkown',
    refZoonoticType: '738',
    userId: elizabeth._id,
    author: elizabeth.profile.name,
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

}