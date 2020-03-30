import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Rooms = new Mongo.Collection("rooms");
Messages = new Mongo.Collection("messages");
