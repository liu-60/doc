/* utils 集合
 * Author:      liuling 
 * CreateTime:  8/6/2019, 3:48:11 PM 
 * ModifyTime:  8/6/2019, 4:06:26 PM
 * Description: 积累自己所用到的工具
*/

/** 
 * 获取带 # 的 url 中的 query，答：注意上面的search和hash的区别，如果URL中“？”之前有一个“#” 
 * 比如：“http://localhost:8080/index.html#/?yuiassotoken=35&id=5”那么使用window.location.search得到的就是空（“”）。
 * 因为“？type=35&id=5”串字符是属于“#/?yuiassotoken=35&id=5”这个串字符的，也就是说查询字符串search只能在取到“？”后面和“#”之前的内容，如果“#”之前没有“？”search取值为空。
*/

function GetQueryString(name) {
    var after = window.location.hash.split("?")[1];
    if (after) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = after.match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        else {
            return null;
        }
    }
}