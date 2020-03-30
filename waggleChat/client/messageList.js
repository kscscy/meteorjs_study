import './messageList.html';

Template.messageList.onCreated(function () {
    var inst = this;
    //this.subscribe("messages",Session.get("currentRoom"),30);
    Session.set("limit", 30);
    inst.subcnt = 0;
    inst.autorun(function () {
        inst.messagesSub = inst.subscribe("messages",
            Session.get("currentRoom"),
            Session.get("limit"),
            function () {

                // 최초 구독, 현재 함수 처음 실행시에만
               if (inst.subcnt === 0) {
                    inst.subcnt = 1;
                    $(".panel-body").scrollTop($(".chat").height());
                }
            });

        inst.subscribe("room", Session.get("currentRoom"),function () {
            // 감지해서 바닥으로보내는 코드를 작성하자
            Rooms.find({_id:Session.get("currentRoom")}).observe({
                changed : function(newDoc,oldDoc){
                    $('.panel-body').scrollTop($('.chat').height());
                }
            });
        })
    });
});

Template.messageList.onRendered(function () {
    var staticSize = 90;

    // 스크롤 유지
    $(".panel-body").height($(window).height() - staticSize);

    // 윈도 크기가 변경돼도 유지
    $(window).resize(function () {
        $(".panel-body").height($(window).height() - staticSize);
    });

    // 무한 스크롤
    $(".panel-body").scroll(function () {
        if ($(".panel-body").scrollTop() === 0) {
            //$(".panel-body").scrollTop(30);
            Session.set("limit", Session.get("limit") + 10);
        }
    });
});

Template.messageList.onDestroyed(function () {
    var inst = this;
    this.messagesSub.stop();
});

Template.messageList.helpers({
    messages() {
        return Messages.find({}, {sort: {timestamp: 1}});
    }
});
