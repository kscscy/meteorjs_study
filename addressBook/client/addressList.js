import { Template } from 'meteor/templating';
import { AddressBook } from '../lib/collection.js';
import { Session } from 'meteor/session';

Template.addressList.onCreated(function(){
  Session.set("cnt", 30);
  var self = this;
  //self.subscribe("AddressBookData", 5);
  //self.subscribe("AddressBookData", Session.get("cnt"));

  self.autorun(function(){
    self.subscribe("AddressBookData",Session.get("cnt"));
  });

  $(window).scroll(function(){
    var scrollHeight = $(window).scrollTop() + $(window).height();
    var documentHeight = $(document).height();

    if(scrollHeight + 200 >= documentHeight){
      Session.set("cnt",Session.get("cnt") + 30);
    }
  });

})

Template.addressList.helpers({
  list(){
    return AddressBook.find({});
    // asc:1 desc:-1
    //return AddressBook.find({},{sort:{name:-1}});
  }
});

Template.addressList.events({
/* move to addressListItem
  'click button[name=remove]'(evt,tmpl){
    console.log(tmpl);
    console.log(this);

    AddressBook.remove({_id: this._id});
  }
  */
  "click button[name=more]"(evt,tmpl){
    Session.set("cnt",Session.get("cnt")+5);
  }
});

Template.addressListItem.helpers({
  editing(){
    return this._id === Session.get("editItem");
  }
})

Template.addressListItem.events({
  'click button[name=remove]'(evt,tmpl){
      AddressBook.remove({_id: this._id});
  },

  'click button[name=modify]'(evt,tmpl){
      Session.set("editItem", this._id);
  },

  'click button[name=save]'(evt,tmpl){
    var address = {
      name: tmpl.find("input[name=name]").value,
      phone: tmpl.find("input[name=phone]").value,
      email: tmpl.find("input[name=email]").value,
      company: tmpl.find("input[name=company]").value,
      birthday: tmpl.find("input[name=birthday]").value,
    };

    try {
        check(address.name, NotEmptyString);
        check(address.email, EmailString);
        //check(address.phone, PhoneString);
        check(address.company, NotEmptyString);
        //check(address.birthday, BirthDayString);

    } catch(err) {
      alert("입력 값을 확인하세요! : [" + err.message + "]");
      return;
    }

    AddressBook.update({_id:this._id}, {$set:address});
    Session.set("editItem", null);
  },

  'click button[name=calcel]'(evt,tmpl){
    Session.set("editItem", null);
  },
  'click .edit-thing'(evt,tmpl){
    Session.set("editItem",this._id);
  }


});

Template.addressInput.events({
  'click button[name=saveAddress]'(evt,tmpl){
    // convert
    var address = {
      name: tmpl.find("input[name=name]").value,
      phone: tmpl.find("input[name=phone]").value,
      email: tmpl.find("input[name=email]").value,
      company: tmpl.find("input[name=company]").value,
      birthday: tmpl.find("input[name=birthday]").value,
      owner: Meteor.userId()
    };
    /*
    verify
    재사용 함수 추출
    check(address.name, Match.Where((x)=>{
      check(x, String);
      return x.length > 0;
    }));

    이동 > patterns.js
    // check empty string
    var NotEmptyString = Match.Where((x)=>{
      check(x, String);
      return x.length > 0;
    });

    // check valid email
    var EmailString = Match.Where((x) => {
      check(x, String);
      return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(x);
    });

    // check phone number
    var PhoneString = Match.Where((x) => {
      check(x, String);
      return /^\d{3}-\d{3,4}-\d{4}$/.test(x);
    });

    var BirthDayString = Match.Where((x) => {
      check(x, String);
      return /^(19)[0-9][0-9]|20\d{2}\-(0[0-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(x);
    });
    */

    /*
     check(address.name, NotEmptyString);
    // check(address.phone, PhoneString);
     check(address.email, EmailString);
    check(address.company, NotEmptyString);
    //check(address.birthday, BirthDayString);
*/

    try {
        check(address.name, NotEmptyString);
        check(address.email, EmailString);
        //check(address.phone, PhoneString);
        check(address.company, NotEmptyString);
        //check(address.birthday, BirthDayString);

    } catch(err) {
      alert("입력 값을 확인하세요! : [" + err.message + "]");
      return;
    }

    // DB insert
    AddressBook.insert(address);

    // reset
      tmpl.find("input[name=name]").value = "";
      tmpl.find("input[name=phone]").value = "";
      tmpl.find("input[name=email]").value = "";
      tmpl.find("input[name=company]").value = "";
      tmpl.find("input[name=birthday]").value = "";

  }
})
