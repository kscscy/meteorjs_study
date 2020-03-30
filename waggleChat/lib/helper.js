Template.registerHelper("currentMode",()=>{
  if(!Session.get("viewMode")) Session.set("viewMode","chatMain");
  return Session.get("viewMode");
});

Template.registerHelper("ago",(timestamp)=>{
  //return moment(timestamp).fromNow();
  return Session.get("localtime") && moment(timestamp).fromNow();
});

Meteor.startup(() => {
  Session.set("localtime", 1);
  Meteor.setInterval(function(){
    Session.set("localtime", Random.id());
  }, 1000);
});
