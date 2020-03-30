//import { Meteor } from 'meteor/meteor';
//import './collections.js';

Meteor.methods({
  insertMessage(messageObject){
    console.log('methods insertMessage');
    if(Meteor.isClient){
      messageObject["isClient"] = true;
    }
    Messages.insert(messageObject);

    Rooms.update({_id:messageObject.roomId},{
      $set: {lastMessageTime: messageObject.timestamp}
    });
  }
});