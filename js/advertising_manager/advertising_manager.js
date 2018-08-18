/** 
 * @Author: YISHI 
 * @Date: 2018-08-17 11:14:29 
 * @Desc: 广告管理
 */

layui.use(['element', 'table', 'layer', 'form', 'util'], function () {
    var element = layui.element,
        table = layui.table,
        form = layui.form,
        $ = layui.jquery,
        util = layui.util;

    // 广告管理 TB
    table.render({
        elem: '#TB_ADVERTISING',
        height: 315,
        page: true,
        cols: [[
            { field: 'id', title: '社区ID' },
            { field: 'name', title: '社区名称' },
            { field: 'person', title: '社区负责人' },
            { field: 'concat', title: '联系方式' },
            { field: 'address', title: '联系地址' },
            { field: 'account_time', title: '账号到期时间' },
            { field: 'community_count', title: '社区商家数' },
            { fixed: 'right', title: '操作', width: 178, align: 'center', toolbar: '#B_ADVERTISING' }
        ]],
        data: [{
            "id": "10001",
            "name": "一十",
            "person": "农业银行",
            "cash": "20000",
            "concat": "20000",
            "account_time": "12321312321312",
            "community_count": "2019-09-09"
        }]
    });

    // 监听 table_bar
    table.on('tool(F_ADVERTISING)', function (obj) {
        var data = obj.data;
        if (obj.event === 'edit') {
            layer.alert('编辑行：<br>' + JSON.stringify(data))
        } else if (obj.event === 'delete') {
            layer.msg('ID：' + data.id + '冻结');
        }
    });
});
