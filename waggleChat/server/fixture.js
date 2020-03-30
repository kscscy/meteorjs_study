import '../lib/collections.js';

Meteor.startup(()=>{
  if(!Rooms.findOne({_id:"MeteorSchool"})) {

    // init User
    var usr1 = Accounts.createUser({
      username: "name1",
      email: "name1@test.com",
      password: "111111"
    });
    var usr2 = Accounts.createUser({
      username: "name2",
      email: "name2@test.com",
      password: "222222"
    });

    // Create Room
    Rooms.insert({
      _id: "MeteorSchool",
      name: "MeteorSchool",
      owner: usr1,
      userList: [usr1, usr2],
      createdAt: (new Date()).getTime()
    });

  }

});
