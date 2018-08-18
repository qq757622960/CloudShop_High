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

    // 监听 TAB
    element.on('tab(TAB)', function (data) {
        var $tabItemsElem = $('.layui-tab-content .layui-tab-item');
        $tabItemsElem.removeClass('layui-show');
        $tabItemsElem.eq(data.index).addClass('layui-show');
    });

    // 生成 TB
    table.render({
        elem: '#TB_COMMUNITY_DETAIL',
        height: 315,
        page: true,
        cols: [[
            { field: 'id', title: 'ID' },
            { field: 'name', title: '姓名' },
            { field: 'concat', title: '联系方式' },
            { field: 'shopname', title: '店铺名称' },
            { field: 'account_time', title: '账号到期时间' },
            { field: 'promotion_auth', title: '推广权限' },
            { fixed: 'right', title: '操作', width: 178, align: 'center', toolbar: '#B_COMMUNITY_DETAIL' }
        ]],
        data: [{
            "id": "10001",
            "name": "一十",
            "concat": "13853079890",
            "shopname": "水果大亨",
            "account_time": "2018-09-17",
            "promotion_auth": "无"
        }]
    });

    // 监听 table_bar
    table.on('tool(F_COMMUNITY_DETAIL)', function (obj) {
        var data = obj.data;
        if (obj.event === 'detail') {
            layer.msg('ID：' + data.id + '详情操作');
        } else if (obj.event === 'freeze') {
            layer.msg('ID：' + data.id + ' 的查看操作');
        } else if (obj.event === 'edit') {
            layer.alert('编辑行：<br>' + JSON.stringify(data))
        }
    });
});
