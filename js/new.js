/**
 * Created by Administrator on 2016/3/14.
 */
var tip = new AIKeyTip({
    callback: function() {
        //alert("����ǻص�������");
    },
    closeBtn: true,
    message: '1.�ף�����˺ź�������ϵͳ���ɣ����ڶ��������в鿴��<br>2.�ף�����˺ź�������ϵͳ���ɣ����ڶ��������в鿴��'
});
var tip_other = new AIKeyTip({
    callback: function() {
        //alert("����ǻص�������");
    },
    closeBtn: true,
    idName: "my-div",
    message: '1.�ף�����˺ź�������ϵͳ���ɣ����ڶ��������в鿴��'
});
var tip6 = new AIToastTip({
    message: "��ѡ��Ӫ����������ѡ��Ӫ����������ѡ��Ӫ����������ѡ��Ӫ��������",
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
        channelName: 'ѡ��1'
        //mustSelect:true
    }, {
        channelId: '1002',
        channelName: 'ѡ��2'
    }, {
        channelId: '1003',
        channelName: 'ѡ��3'
    }, {
        channelId: '1004',
        channelName: 'ѡ��4'
        //  disabled: true
    }],
    onSelect: function(radio_normal) {
        //alert(JSON.stringify(obj.getSelectedIndex()));
//			console.log(radio_normal.getIndex());
    },
    must: false
});