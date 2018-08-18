/** 
 * @Author: YISHI 
 * @Date: 2018-08-17 11:14:29 
 * @Desc: 修改密码管理 
 */

layui.use(['element', 'table', 'layer', 'form', 'util'], function () {
    var element = layui.element,
        table = layui.table,
        form = layui.form,
        $ = layui.jquery,
        util = layui.util;

    
    // 修改密码
    form.on('submit(submit)', function(data) {
        console.dir(data.field);

        return false;
    });

    // 表单验证
    form.verify({
        // 验证密码长度
        pass: [
            /^[\S]{6,12}$/,
            GLOBAL.TIPS.PWD_LENGTH
        ],
        // 确认两次密码是否一致
        confirmPwd: function(val) {
            var value = $('input[name=user_new_pwd]')[0].value;
            if (val !== value) return GLOBAL.TIPS.PWD_NOT_EQ_TIPS;
        }
    })
});
