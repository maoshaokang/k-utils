export function isNode() {
    if (typeof window !== 'object') {
        // node
        return true;
    } else {
        // 浏览器
        return false;
    }
}
export default {
    isNode
}