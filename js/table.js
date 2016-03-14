/**
 * Created by Administrator on 2016/3/7.
 */
var users = {total:12,rows:[
    {no:1,name:'用户1',addr:'山东济南',cost:10,email:'user1@163.com',birthday:'1/1/1980'},
    {no:2,name:'用户2',addr:'山东济南',cost:10,email:'user2@163.com',birthday:'1/1/1980'},
    {no:3,name:'用户3',addr:'山东济南',cost:10,email:'user3@163.com',birthday:'1/1/1980'},
    {no:4,name:'用户4',addr:'山东济南',cost:10,email:'user4@163.com',birthday:'1/1/1980'},
    {no:5,name:'用户5',addr:'山东济南',cost:10,email:'user5@163.com',birthday:'1/1/1980'},
    {no:6,name:'用户6',addr:'山东济南',cost:10,email:'user6@163.com',birthday:'1/1/1980'},
    {no:7,name:'用户6',addr:'山东济南',cost:10,email:'user6@163.com',birthday:'1/1/1980'},
    {no:8,name:'用户6',addr:'山东济南',cost:10,email:'user6@163.com',birthday:'1/1/1980'},
    {no:9,name:'用户6',addr:'山东济南',cost:10,email:'user6@163.com',birthday:'1/1/1980'},
    {no:10,name:'用户6',addr:'山东济南',cost:10,email:'user6@163.com',birthday:'1/1/1980'},
    {no:11,name:'用户6',addr:'山东济南',cost:10,email:'user6@163.com',birthday:'1/1/1980'},
    {no:12,name:'用户6',addr:'山东济南',cost:10,email:'user6@163.com',birthday:'1/1/1980'}

]};
$(function(){
    $('#dg').datagrid({
       // title:'Editable DataGrid',
       // iconCls:'icon-edit',
        width:750,
        height:350,
        singleSelect:true,
        toolbar:'#tb',
        loadMsg:'正在加载中请稍后',
        fitColumns:false,
        columns:[[
            {field:'no',title:'编号',width:50,editor:'numberbox'},
            {field:'name',title:'名称',width:100,editor:'text'},
            {field:'cost',title:'月租',width:80,editor:'numberbox',align:'center'},
            {field:'addr',title:'地址',width:100,editor:'text'},
            {field:'email',title:'电子邮件',width:120,
                editor:{
                    type:'validatebox',
                    options:{
                        validType:'email'
                    }
                }
            },
            {field:'birthday',title:'生日',width:100,editor:'datebox'},
            {field:'action',title:'操作',width:190,align:'center',
                formatter:function(value,row,index){
                    if (row.editing){
                        var s = '<a href="#" class="webui-linkbutton " style="font-size:14px" onclick="saverow('+index+')">保存</a> ';
                        var c = '<a href="#" class="webui-linkbutton"  style="font-size:14px" onclick="cancelrow('+index+')">取消</a>';
                        return s+c;
                    } else {
                        var e = '<a href="#" class="webui-linkbutton " style="font-size:14px" onclick="editrow('+index+')">编辑</a> ';
                        var d = '<a href="#"class="webui-linkbutton " style="font-size:14px" onclick="deleterow('+index+')">删除</a>';
                        return e+d;
                    }
                }
            }
        ]],
        //toolbar:[{
        //    text:'增加',
        //    iconCls:'icon-add',
        //    handler:addrow
        //
        //},{
        //    text:'保存',
        //    iconCls:'icon-save',
        //    handler:saveall
        //},{
        //    text:'取消',
        //    iconCls:'icon-cancel',
        //    handler:cancelall
        //}],

        onBeforeEdit:function(index,row){//index:信息,row:信息
            row.editing = true;
            $('#dg').datagrid('refreshRow', index);//刷新一行
            editcount++;
        },
        onAfterEdit:function(index,row){
            row.editing = false;
            $('#dg').datagrid('refreshRow', index);
            editcount--;
        },
        onCancelEdit:function(index,row){
            row.editing = false;
            $('#dg').datagrid('refreshRow', index);//刷新一行
            editcount--;
        }
    }).datagrid('loadData',users).datagrid('acceptChanges');
});
var editcount = 0;
function editrow(index){
    $('#dg').datagrid('beginEdit', index);
}
function deleterow(index){
    $.messager.confirm('确认',"是否真的删除"+index+"?",function(r){
        if (r){

            //for(var i=index;i<users.rows.length;i++){
                $('#dg').datagrid('selectRow',index).datagrid('deleteRow',index);
                //$('#datagrid').datagrid('clearSelections');
                //i--;
            //}
        }else if(r&&index==$('#dg').datagrid('getRows').length-1){
          $('#dg').datagrid('deleteRow', index);
        }
    });
};

function saverow(index){
    $('#dg').datagrid('endEdit', index);
}
function cancelrow(index){
    $('#dg').datagrid('cancelEdit', index);
}
function addrow(){
    var editIndex = $('#dg').datagrid('getRows').length+1;
    if (editcount > 0){
        $.messager.alert('警告','当前还有'+editcount+'记录正在编辑，不能增加记录。');
        return;
    }
    $('#dg').datagrid('appendRow',{
        no:'editIndex',
        name:'',
        addr:'',
        email:'',
        birthday:''
    });
}
function saveall(){
    $('#dg').datagrid('acceptChanges');
}
function cancelall(){
    $('#dg').datagrid('rejectChanges');
}