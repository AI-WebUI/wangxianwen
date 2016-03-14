/**
 * Created by Administrator on 2016/3/10.
 */
$(function() {
    var opt = {
        "item": [{
            "text": "1.地址选择"
        }, {
            "text": "2.业务选择"
        }, {
            "text": "3.业务办理"
        }, {
            "text": "4.确认支付"
        }, {
            "text": "5.竣工配送"
        }],
        step: 1,
        visited: true
        //afterStep: lalala
    };
    window.dd = $("#demo").AIStep(opt);
    $('#company').combobox({
        url:'data/combobox_data.json',
        valueField:'id',
        textField:'text',
        editable:false
    });
    $('#code').combobox({
        url:'data/combobox_data.json',
        valueField:'id',
        textField:'text',
        editable:false
    });
    $('#start').datebox().datebox('calendar').calendar();
    $('#end').datebox().datebox('calendar').calendar({
        validator: function(date) {
            var _start = $('#start').datebox("getValue");
            var _s = new Date(_start);
            var _outStart = new Date(_s.getFullYear(), _s.getMonth(), _s.getDate());
            return _outStart <= date;
        }
    });
     $("#start").datebox('setValue','13/3/2016');
    //$('#start').datebox({
    //    onSelect: function(date){
    //        alert(date.getFullYear()+":"+(date.getMonth()+1)+":"+date.getDate());
    //    }
    //});
    var start=$("#start").datebox('getValue');
    //alert(start);
    $("#end").datebox('setValue','13/3/2016')
    var end=$("#end").datebox('getValue');
    $(".date").html(start+'-'+end);
});
    var checkbox_normal = $("#checkbox-normal").AISelect({
        type: 'checkbox',
        displayField: 'channelName',
        valueField: 'channelId',
        data: [{
            channelId: '1001',
            channelName: '客户自备猫'
            //mustSelect: true
        }],
        onSelect: function(obj) {
            //alert(JSON.stringify(obj.getSelectedIndex()));
        },
        must: false
    });
    $('#accordion_demo').accordion({closed:false});
//费用表格信息

    $(".cost-table").datagrid({
        width:750,
        height:157,
        url:'data/custom.json',
        method:'get',
        singleSelect:true,
        loadMsg: "查询数据请稍候。。。",
        showFooter:true,
        //fitColumns:true,
        columns:[[
            {field:'name',title:'费用名称',width:100,editor:'numberbox',align:'center'},
            {field:'cost',title:'应收费用',width:100,editor:'text',align:'center'},
            {field:'discout',title:'优惠费用',width:100,editor:'numberbox',align:'center',editor:{
                type:'validatebox',
                options:{
                    validType:'number'
                }
            }},
            {field:'discoutreason',title:'优惠原因',width:300,editor:'text'},
            {field:'relpay',title:'实收费用',width:108,editor:'text',align:'center'},
            //{field:'togher'}
        ]]
        //styler: function(value, row, index) {
        //    return 'border:0;';
        //}
});

//$('.cost-table').datagrid('getPanel').removeClass('lines-both lines-no lines-right lines-bottom');
//$(".cost-table").datagrid("appendRow",);
var radio_normal2 = $("#radio-nomarl2").AISelect({
    type: 'radio',
    displayField: 'channelName',
    valueField: 'channelId',
    data: [{
        channelId: '1001',
        channelName: '下周期生效'
        //mustSelect:true
    }, {
        channelId: '1002',
        channelName: '立即生效'
    }, {
        channelId: '1003',
        channelName: '自定义'
    }],
    onSelect: function(radio_normal) {
        //alert(JSON.stringify(obj.getSelectedIndex()));
//			console.log(radio_normal.getIndex());
    },
    must: false

});
var radio_normal2 = $("#radio-nomarl3").AISelect({
    type: 'radio',
    displayField: 'channelName',
    valueField: 'channelId',
    data: [{
        channelId: '2001',
        channelName: '新建移动支付用户'
        //mustSelect:true
    }, {
        channelId: '2002',
        channelName: '加入统一支付账户'
    }],
    onSelect: function(radio_normal) {
        //alert(JSON.stringify(obj.getSelectedIndex()));
//			console.log(radio_normal.getIndex());
    },
    must: false

});