/** 
 * @Author: YISHI 
 * @Date: 2018-08-17 11:14:29 
 * @Desc: 会员详情
 */

layui.use(['element', 'table', 'layer', 'form', 'util'], function () {
    var element = layui.element,
        table = layui.table,
        form = layui.form,
        $ = layui.jquery,
        util = layui.util;

    // 会员列表 TB
    table.render({
        elem: '#TB_SHOP_ORDER',
        height: 315,
        page: true,
        cols: [[
            { field: 'id', title: '订单编号' },
            { field: 'name', title: '用户名称' },
            { field: 'concat', title: '联系方式' },
            { field: 'address', title: '收货地址' },
            { field: 'order_time', title: '下单时间' }
        ]],
        data: [{
            "id": "10001",
            "name": "一十",
            "concat": "13853079890",
            "address": "水果大亨",
            "order_time": "2018-09-17"
        }]
    });

    // 下级会员列表 TB
    table.render({
        elem: '#TB_MEMBER_LEVEL',
        height: 315,
        page: true,
        cols: [[
            { field: 'id', title: '会员ID' },
            { field: 'name', title: '姓名' },
            { field: 'concat', title: '联系方式' },
            { field: 'shop_name', title: '店铺名称' },
            { field: 'account_time', title: '账号到期时间' },
            { field: 'popularize_auth', title: '推广权限' },
            { field: 'promoter', title: '推广员' },
            { fixed: 'right', title: '操作', width: 178, align: 'center', toolbar: '#B_MEMBER_LEVEL' }
        ]],
        data: [{
            "id": "10001",
            "name": "一十",
            "concat": "13853079890",
            "shop_name": "水果大亨",
            "account_time": "2018-09-17",
            "popularize_auth": "2018-09-17",
            "promoter": "2018-09-17"
        }]
    });

    // 监听 table_bar 下级会员列表
    table.on('tool(F_MEMBER_LEVEL)', function (obj) {
        var data = obj.data;
        if (obj.event === 'detail') {
            layer.msg('ID：' + data.id + '详情操作');
        } else if (obj.event === 'edit') {
            layer.alert('编辑行：<br>' + JSON.stringify(data))
            // window.location.href = "./member_edit.html";
        }
    });
});
