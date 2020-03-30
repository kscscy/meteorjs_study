import './messageInput.html';

Template.messageInput.events({
  "click button[name=sendMessage]"(evt,tmpl){
    /* Move to onCreated
      // 1. get Textbox message
      var txtBox = tmpl.find("input[name=messageText]");
      var message = txtBox.value;
      if(!message) return;

      // 2. insert Message
      var messageObj = {
        timestamp: (new Date()).getTime(),
        msg: message,
        roomId: Session.get("currentRoom"),
        owner: Meteor.userId(),
        username: Meteor.user().username,
        email: Meteor.user().emails[0].address
      }

      Messages.insert(messageObj);

      // 3. reset Textbox
      txtBox.value = "";
      txtBox.focus();
      */
      tmpl.sendMessage();
  },
  "keyup input[name=messageText]"(evt,tmpl){
    if(evt.keyCode === 13){
      tmpl.sendMessage();
    }
  }
});

Template.messageInput.onCreated(function(){
  var instance = this;
  instance.sendMessage = ()=> {
    // 1. get Textbox message
    var txtBox = instance.find("input[name=messageText]");
    var message = txtBox.value;
    if(!message) return;

    // 2. insert Message
    var messageObj = {
      timestamp: (new Date()).getTime(),
      msg: message,
      roomId: Session.get("currentRoom"),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      email: Meteor.user().emails[0].address
    };

    //Messages.insert(messageObj);
    console.log(messageObj);
    Meteor.call("insertMessage",messageObj);

    // 3. reset Textbox
    txtBox.value = "";
    txtBox.focus();
  };
});
