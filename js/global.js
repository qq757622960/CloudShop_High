
/** 
 * @Author: YISHI 
 * @Date: 2018-07-13 09:57:13  
 * @Desc: 通用层
 */
layui.define(['element'], function(exports) {
    
    var $ = layui.jquery,
        element = layui.element;
    
    // 手机端简单适配
    var mobileTree = $(`.${GLOBAL.CLASS_NAME.SITE_MOBILE_TREE}`),
        mobileShade = $(`.${GLOBAL.CLASS_NAME.SITE_MOBILE_SHADE}`);

    // 点击侧栏小按钮显示侧栏
    mobileTree.on('click', function() {
        $('body').addClass(GLOBAL.CLASS_NAME.SITE_MOBILE);
    });

    // 点击遮罩隐藏侧栏
    mobileShade.on('click', function () {
        $('body').removeClass(GLOBAL.CLASS_NAME.SITE_MOBILE);
    });


    // 返回上一页
    $('#back').on('click', function() { window.history.back(); })

    exports('global', {});
});
