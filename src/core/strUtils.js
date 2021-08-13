import { isNode } from './checkUtils.js';
/**
* 获取URL参数
* @param url 地址
* @returns 例：getUrlPrmt("http://www.baidu.com?id=1&nam=张三&uid=12345654321&type=1,2,3")，结果{id: "1", nam: "张三", uid: "12345654321", type: "1,2,3"}
*/
export function getUrlPrmt(url = '') {
    if (!isNode()) {
        url = url || window.location.href;
    }
    let _pa = url.substring(url.indexOf('?') + 1),
        _arrS = _pa.split('&'),
        _rs = {};
    for (let i = 0, _len = _arrS.length; i < _len; i++) {
        let pos = _arrS[i].indexOf('=');
        if (pos === -1) {
            continue;
        }
        let name = _arrS[i].substring(0, pos),
            value = isNode() ? decodeURIComponent(_arrS[i].substring(pos + 1)) : window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
};

export default {
    getUrlPrmt
}
