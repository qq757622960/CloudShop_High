/** 
 * @Author: YISHI 
 * @Date: 2018-07-28 18:04:01 
 * @Desc: 首页 
 */
layui.use(['layer', 'element'], function () {
    var element = layui.element,
        layer = layui.layer,
        $ = layui.jquery;

    /**
     * 语法: element.on(filter)
     * 根据当前 tab-title 的下标, 用于显示对应的 tab-content
     * 监听 tab title 的点击事件, 并获取当前 tab_title 的 index(下标)
     * 根据 index(下标) 用来切换显示对应的 tab_content
     */
    element.on('tab(indexTab)', function (data) {
        var $tabItemsElem = $('.layui-tab-content .layui-tab-item');
        $tabItemsElem.removeClass('layui-show');
        $tabItemsElem.eq(data.index).addClass('layui-show');
    });

    /**
     * 获取设备信息
     */
    function getDeviceInfo(key) {
        var agent = navigator.userAgent.toLowerCase(),

            result = {
                android: function () {
                    return /android/.test(agent);
                }(),
                ios: function () {
                    return /iphone|ipod|ipad|ios/.test(agent);
                }(),
                weixin: function () {
                    return /micromessenger/.test(agent);
                }()
            }

        // 判断是否是 APP
        result.isApp = function () {
            return result.android || result.ios;
        }();

        return result;
    }

    var result = getDevice();
    layer.msg(JSON.stringify(result), { time: 10000 });
});