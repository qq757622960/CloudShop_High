/** 
 * @Author: YISHI 
 * @Date: 2018-08-20 09:12:19 
 * @Desc: 工具方法
 */

const UTILS = {
    /**
     * 格式化人民币
     * 1234567890 => 12,34,567,890
     */
    formatNumber: function(str) {
        return str.split("").reverse().reduce(function(prev, next, index) {
            return ((index % 3) ? next : (next + ',')) + prev;
        });
    }
};