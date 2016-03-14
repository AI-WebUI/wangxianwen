/**
 * Created by Administrator on 2016/3/6.
 */
$(function(){
    function onchange(){$("#welcome_text").animate({left:'-210px'},8000,function(){
        $("#welcome_text").css("left","210px")
    })
    }
    setInterval(function () { onchange(); }, 2000);
    $("#tt").tabs({
        width:790,
        height:350,
        plain:true,
        border:true,
        scrollIncrement:160,
        tools:[{
            iconCls:'icon-add',
            handler:function() {
                $('#tt').tabs('add', {
                    title: 'new tab',
                    closable:true
                })
            }
        }]
    });
    $("#tt").tabs('add',{
        title:'服务',
        selected: true,
        closable:false,
        tabWidth:120,
        content:'<table id="dg"></table> '
    });
    $("#tt").tabs('add',{
        title:'服务',
        selected: false,
        closable:true,
        tabWidth:120,
        content:'<div id="accordion_demo" style="width:500px;height:auto;"><div  title="推荐人"><div style="padding: 20px;"> <p>推荐人内容</p> </div> </div></div>'
    });
    $("#tt").tabs('add',{
        title:'服务',
        selected: false,
        closable:true,
        tabWidth:120,
        content:'<label class="label">开始：</label><input id="start" class="webui-datebox"><label class="label">结束：</label><input id="end" class="webui-datebox">'
    });
    $("#tt").tabs('add',{
        title:'服务',
        selected: false,
        closable:true,
        tabWidth:120,
        content:'<div id="checkbox-normal"></div><div id="radio-nomarl2"></div>'
    });
    $("#tt").tabs('add',{
        title:'服务',
        selected: false,
        closable:true,
        tabWidth:120,
        content:'<div id="cascade-select"></div>'
    });
    $("#tt").tabs('add',{
        title:'服务',
        selected: false,
        closable:true,
        tabWidth:120
    });
    $('#accordion_demo').accordion({closed:true});
    $.blockUI({
        timeout: 1000 //默认10秒
        //onUnblock:function(){
        //    alert('页面刷新中');
        //    //window.location.reload();
        //}
    });
    //$.unblockUI();
  //  $.blockUI({ timeout:500,message:'<div class="panel-loading" >亲，正在加载中...</div>' });

        $('#start').datebox({formatter:function(date){
            var y = date.getFullYear();
            var m = date.getMonth()+1;
            var d = date.getDate();
            return y+'-'+m+'-'+d;
        }}).datebox('calendar').calendar();//获取日期对象
        $('#end').datebox().datebox('calendar').calendar({
            validator: function(date) {
                var _start = $('#start').datebox("getValue");//获取日期
                var _s = new Date(_start);//创建新的日期
                var _outStart = new Date(_s.getFullYear(), _s.getMonth(), _s.getDate());//获取新日期的值
                return _outStart <= date;//大于等于开始日期
            }
        });
    var checkbox_normal = $("#checkbox-normal").AISelect({
        type: 'checkbox',
        displayField: 'channelName',
        //valueField: 'channelId',
        data: [{
            //channelId: '1001',
            channelName: '选项1',
            //mustSelect: true
        }, {
            //channelId: '1002',
            channelName: '选项2'
        }, {
            //channelId: '1003',
            channelName: '选项3'
        }, {
            //channelId: '1004',
            channelName: '选项4'
            //disabled: true
        }],
        onSelect: function(obj) {
            alert(JSON.stringify(obj.getSelectedIndex()));
        },
        must: false
    });
    var radio_normal2 = $("#radio-nomarl2").AISelect({
        type: 'radio',
        displayField: 'channelName',
        valueField: 'channelId',
        data: [{
            channelId: '1001',
            channelName: '选项1',
            //mustSelect:true
        }, {
            channelId: '1002',
            channelName: '选项2'
        }, {
            channelId: '1003',
            channelName: '选项3'
        }, {
            channelId: '1004',
            channelName: '选项4',
          //  disabled: true
        }],
        onSelect: function(radio_normal) {
            //alert(JSON.stringify(obj.getSelectedIndex()));
//			console.log(radio_normal.getIndex());
        },
        must: false
    });
    var cascade_select = $("#cascade-select").AISelectQuery({
        width: 400,
        fields: [{
            id: 'item1',
            name: '手机品牌',
            content: [{
                text: '苹果',
                value: '1'
            }, {
                text: '小米',
                value: '2'
            }, {
                text: '三星',
                value: '3'
            }]
        }, {
            id: 'item2',
            name: '手机颜色',
            content: [{
                text: '白色',
                value: '1'
            }, {
                text: '土豪金',
                value: '2'
            }, {
                text: '深空灰',
                value: '3'
            }],
            multi: true
        }, {
            id: 'item3',
            name: '价格',
            content: [{
                text: '0~500',
                value: '1'
            }, {
                text: '500~2000',
                value: '2'
            }, {
                text: '2000~5000',
                value: '3'
            }]
        },{id:'item4',
            name:'数量',
            content:[{text:'<div id="btn_groupmax"></div>'}]
        }]
    });
    $("#btn_groupmax").operateBtn({max: 15,min:0,type: "small"});
});