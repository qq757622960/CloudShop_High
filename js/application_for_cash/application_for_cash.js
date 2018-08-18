/** 
 * @Author: YISHI 
 * @Date: 2018-08-17 11:14:29 
 * @Desc: 会员列表
 */

layui.use(['element', 'table', 'layer', 'form', 'util'], function () {
    var element = layui.element,
        table = layui.table,
        form = layui.form,
        $ = layui.jquery,
        util = layui.util;

    // 申请列表 TB
    table.render({
        elem: '#TB_APP_CASH',
        height: 315,
        page: true,
        cols: [[
            { field: 'id', title: '会员ID' },
            { field: 'name', title: '提现人' },
            { field: 'bank', title: '开户行' },
            { field: 'cash', title: '提现金额' },
            { field: 'use_cash', title: '可提现金额' },
            { field: 'card_id', title: '卡号' },
            { field: 'app_time', title: '申请时间' },
            { fixed: 'right', title: '财务审批', width: 178, align: 'center', toolbar: '#B_APP_CASH' }
        ]],
        data: [{
            "id": "10001",
            "name": "一十",
            "bank": "农业银行",
            "cash": "20000",
            "use_cash": "20000",
            "card_id": "12321312321312",
            "app_time": "2019-09-09"
        }]
    });

    // 监听 table_bar 下级会员列表
    table.on('tool(F_APP_CASH)', function (obj) {
        var data = obj.data;
        if (obj.event === 'confirm') {
            layer.msg('ID：' + data.id + '确定');
        }
    });
});
