/**
 * Created by Administrator on 2016/3/14.
 */
var tip = new AIKeyTip({
    callback: function() {
        //alert("这个是回调函数！");
    },
    closeBtn: true,
    message: '1.亲，宽带账号和密码由系统生成，可在订单详情中查看！<br>2.亲，宽带账号和密码由系统生成，可在订单详情中查看！'
});
var tip_other = new AIKeyTip({
    callback: function() {
        //alert("这个是回调函数！");
    },
    closeBtn: true,
    idName: "my-div",
    message: '1.亲，宽带账号和密码由系统生成，可在订单详情中查看！'
});
var tip6 = new AIToastTip({
    message: "请选择营销案档次请选择营销案档次请选择营销案档次请选择营销案档次",
    type: "warn-little",
    idName:"my-div",
    closeBtn:true,
    timeout: 1000
});

//        function openTest() {
//            tip.open();
//        }
$('#box').dialog({
    title: 'My Dialog',
    width: 400,
    height: 200,
    closed: true,
    cache: false,
    modal: true
});
var shade = $('body').AIShade({content: "test"});
var radio_normal2 = $("#radio-nomarl2").AISelect({
    type: 'radio',
    displayField: 'channelName',
    valueField: 'channelId',
    data: [{
        channelId: '1001',
        channelName: '选项1'
        //mustSelect:true
    }, {
        channelId: '1002',
        channelName: '选项2'
    }, {
        channelId: '1003',
        channelName: '选项3'
    }, {
        channelId: '1004',
        channelName: '选项4'
        //  disabled: true
    }],
    onSelect: function(radio_normal) {
        //alert(JSON.stringify(obj.getSelectedIndex()));
//			console.log(radio_normal.getIndex());
    },
    must: false
});