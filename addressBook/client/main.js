import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../lib/collection.js';
import '../lib/checkPatterns.js'
//import { addressList } from './addressList.html';
import './addressList.html';
import './addressList.js'
//import { AddressBook } from '../lib/collection.js';


import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
