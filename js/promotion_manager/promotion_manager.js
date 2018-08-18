/** 
 * @Author: YISHI 
 * @Date: 2018-08-17 11:14:29 
 * @Desc: 推广管理
 */

layui.use(['element', 'table', 'layer', 'form', 'util', 'laydate'], function () {
    var element = layui.element,
        table = layui.table,
        form = layui.form,
        $ = layui.jquery,
        util = layui.util,
        laydate = layui.laydate;

    // 推广管理 TB
    table.render({
        elem: '#TB_PROMOTION',
        height: 315,
        page: true,
        cols: [[
            { field: 'id', title: '会员ID' },
            { field: 'name', title: '姓名' },
            { field: 'shop_name', title: '店铺名称' },
            { field: 'm_role', title: '会员角色' },
            { field: 'concat', title: '联系方式' },
            { field: 'zj_pro_count', title: '直接推广人数' },
            { field: 'td_pro_count', title: '团队推广人数' },
        ]],
        data: [{
            "id": "10001",
            "name": "一十",
            "shop_name": "店铺名称",
            "m_role": "会员角色",
            "concat": "123213123213",
            "zj_pro_count": "122",
            "td_pro_count": "3123"
        }]
    });

    // 渲染时间
    laydate.render({
        elem: '#START_TIME'
    });

    laydate.render({
        elem: '#END_TIME'
    });
});
