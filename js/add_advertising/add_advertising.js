/** 
 * @Author: YISHI 
 * @Date: 2018-08-17 11:14:29 
 * @Desc: 添加广告 
 */

layui.use(['element', 'table', 'layer', 'form', 'util'], function () {
    var element = layui.element,
        table = layui.table,
        form = layui.form,
        $ = layui.jquery,
        util = layui.util;


    // 提交表单(服务端请自行设置 input[name] 值, 就可以看到属性值了)
    form.on('submit(submit)', function (data) {
        console.dir(data.field);

        return false;
    });
});
