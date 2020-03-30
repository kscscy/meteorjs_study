import { Meteor } from 'meteor/meteor';
import { AddressBook } from '../lib/collection.js';

Meteor.publish("AddressBookData", function(count){

  var userId = this.userId;

  if(userId){
    return AddressBook.find({owner: userId}, {limit: count});
  }

});
