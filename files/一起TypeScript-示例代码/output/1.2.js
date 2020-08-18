/**
 * 1.2 函数
 */
import 'jquery';
// 1.2.1 函数声明
function cutString(str, len) {
    // return len; // error，返回值必须和声明的类型一致
    return str.slice(0, len);
}
cutString('hello world!', 10);
// 1.2.2 函数表达式
const cutStr = (str, len) => str.slice(0, len);
// 1.2.3 this 虚拟参数
function clickHandler(ev) {
    if (ev.clientX > 100) {
        this.target = '_blank';
    }
}
$('#nav a').on('click', clickHandler);
// 1.2.4 可选参数
function optional(a, b) {
    return b ? a + b : a * a;
}
// 必选参数必须在可选参数之前
// function optional1(a?: number, b: number): number {
//     return a ? a + b : b * b;
// }
// 可选参数和默认值参数的顺序没有限制，但都必须位于 rest 参数之前
function optional2(a, b = 100, c, ...args) {
    console.log(`${a}-${b}-${c}`);
}
function optional3(a, b, c = 100, ...args) {
    console.log(`${a}-${b}-${c}`);
}
function overload(operate, source) {
    if (operate === 'numberToString') {
        return source;
    }
    else if (operate === 'stringToNumber') {
        return Number(source);
    }
    else {
        return !!source;
    }
}
const ov_a = overload('numberToString', 100);
const ov_b = overload('stringToNumber', '100');
const ov_c = overload('toBoolean', '100');
const ov_d = overload('toBoolean', 100);
//# sourceMappingURL=1.2.js.map