import { Mongo } from 'meteor/mongo';

export const AddressBook = new Mongo.Collection('addressBook');
//AddressBook = new Mongo.Collection('addressBook');

if(Meteor.isServer){
  // Server
  AddressBook.allow({
    insert(userId, doc){
      return (userId && doc.owner === userId);
    },

    update(userId, doc, fields, modifier){
      return (userId && doc.owner === userId);
    },

    remove(userId, doc){
      return (userId && doc.owner === userId);
    }
  });
}
