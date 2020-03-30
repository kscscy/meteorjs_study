import { Meteor } from 'meteor/meteor';
import './fixture.js';
import './allow.js';
import './publish.js';

// lib 서버쪽에 두고, 서버쪽 main 에서 import 해서 사용
import '../lib/methods.js';



Meteor.startup(() => {
  // code to run on server at startup
});
