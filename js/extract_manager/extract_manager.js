/** 
 * @Author: YISHI 
 * @Date: 2018-08-17 11:14:29 
 * @Desc: 提成统计
 */

layui.use(['element', 'table', 'layer', 'form', 'util', 'laydate'], function () {
    var element = layui.element,
        table = layui.table,
        form = layui.form,
        $ = layui.jquery,
        util = layui.util,
        laydate = layui.laydate;

    // 提成统计 TB
    table.render({
        elem: '#TB_EXTRACT',
        height: 315,
        page: true,
        cols: [[
            { field: 'id', title: '提成ID' },
            { field: 'name', title: '提成人' },
            { field: 'shop_name', title: '来源店铺' },
            { field: 'money', title: '提成金额' },
            { field: 'time', title: '提成时间' },
            { field: 'explain', title: '提成说明' },
            { fixed: 'right', title: '提成状态', width: 178, align: 'center', toolbar: '#B_STATUS' }
        ]],
        data: [{
            "id": "10001",
            "name": "一十",
            "shop_name": "店铺名称",
            "money": "22222",
            "time": "2018-09-09",
            "explain": "122"
        }]
    });

    // 监听 table_bar
    table.on('tool(F_EXTRACT)', function (obj) {
        var data = obj.data;
        if (obj.event === 'detail') {
            layer.msg('ID：' + data.id + '详情操作');
        } else if (obj.event === 'edit') {
            layer.alert('编辑行：<br>' + JSON.stringify(data))
            // window.location.href = "./member_edit.html";
        }
    });

    // 渲染时间
    laydate.render({
        elem: '#START_TIME'
    });

    laydate.render({
        elem: '#END_TIME'
    });
});
