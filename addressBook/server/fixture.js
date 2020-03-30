import { Meteor } from 'meteor/meteor';
import { AddressBook } from '../lib/collection.js';

var fixtures = [
  {
    "name": "name1",
    "phone": "000-0000-0001",
    "email": "abc@test.com",
    "company": "company1",
    "birthday": "1999-01-01"
  },
  {
    "name": "name2",
    "phone": "000-0000-0002",
    "email": "abc@test.com",
    "company": "company2",
    "birthday": "1999-01-02"
  },
  {
    "name": "name3",
    "phone": "000-0000-0003",
    "email": "abc@test.com",
    "company": "company3",
    "birthday": "1999-01-03"
  },
  {
    "name": "name4",
    "phone": "000-0000-0004",
    "email": "abc@test.com",
    "company": "company2",
    "birthday": "1999-01-02"
  },
  {
    "name": "name5",
    "phone": "000-0000-0004",
    "email": "abc@test.com",
    "company": "company1",
    "birthday": "1999-01-04"
  }
]
var fixture = {
  "name": "name",
  "phone": "000-0000-0000",
  "email": "abc@test.com",
  "company": "company",
  "birthday": "1999-01-01"
}

Meteor.startup(() => {
  /*
  if(AddressBook.find().count() === 0){
    console.log('데이터가 존재하지 않습니다. fixture 데이터를 입력합니다.');

    for (var i = 0; i < fixtures.length; i++){
      AddressBook.insert(fixtures[i]);
    }
  }
  */

});

Meteor.methods({
  makeFixtureData(userId){
    // ?
    /*
    for (var i =0, len=fixtures.length; i<len; i++){
      fixtures[i]["owner"] = userId;
      AddressBook.insert(fixtures[i]);
    }
    */
    for (var i = 0; i < 300; i++){
      fixture.name = 'name' + i;
      fixture.company = 'company' + i;
      fixture.owner = userId; 
      AddressBook.insert(fixture);
    }
    return "완료!";
  }
});

/* for RPC
Meteor.call("makeFixtureData", Meteor.userId(), function(err, result){
  console.log(result);
});
*/
